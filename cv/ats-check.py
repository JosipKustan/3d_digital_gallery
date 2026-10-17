# /// script
# requires-python = ">=3.10"
# dependencies = ["pypdf>=5", "pdfminer.six>=20240706"]
# ///
"""Reads a CV PDF the way applicant tracking systems do and flags order problems.

    uv run cv/ats-check.py public/assets/PDF/Josip_Kustan_CV.pdf [-v]

pypdf reads text in raw content-stream order, like the PDFBox/Tika defaults many
ATS use. pdfminer groups text by position. A healthy CV reads the same in both:
every section's text comes before the next section heading.
"""
import json
import logging
import sys
from pathlib import Path

from pdfminer.high_level import extract_text
from pypdf import PdfReader

logging.getLogger("pdfminer").setLevel(logging.ERROR)  # font warnings are noise here

CV_JSON = Path(__file__).with_name("cv.json")
SECTIONS = ["Experience", "Education", "Languages", "Hobbies & Interests"]


def lines(text):
    return [" ".join(line.split()) for line in text.splitlines() if line.strip()]


def first_index(all_lines, needle):
    """Index of the first line containing the start of `needle`, or None."""
    probe = " ".join(needle.split())[:40]
    return next((i for i, line in enumerate(all_lines) if probe in line), None)


def check(name, text, cv):
    found = lines(text)
    heads = {s: next((i for i, l in enumerate(found) if l == s), None) for s in SECTIONS}
    problems = [f"section heading '{s}' not found" for s, i in heads.items() if i is None]

    # Private-use characters mean a glyph lost its Unicode mapping ("+385" reads as "385").
    for i, line in enumerate(found):
        if any("" <= ch <= "" for ch in line):
            problems.append(f"unreadable character (line {i}): {line[:60]!r}")

    # Every work bullet must sit between "Experience" and "Education".
    start, end = heads["Experience"], heads["Education"]
    for job in cv["work"]:
        for bullet in job["highlights"]:
            i = first_index(found, bullet)
            if i is None:
                problems.append(f"missing text: {bullet[:60]}")
            elif start is not None and end is not None and not start < i < end:
                problems.append(f"out of place (line {i}): {bullet[:60]}")

    status = "OK" if not problems else f"{len(problems)} problem(s)"
    print(f"  {name:<9} {len(found):>3} lines  {status}")
    for p in problems[:8]:
        print(f"            - {p}")
    if "-v" in sys.argv:
        print("\n".join(f"            | {l}" for l in found))
    return not problems


def main():
    cv = json.loads(CV_JSON.read_text())
    ok = True
    for path in [a for a in sys.argv[1:] if a != "-v"]:
        reader = PdfReader(path)
        tagged = "/StructTreeRoot" in reader.trailer["/Root"]
        print(f"{path}\n  pages: {len(reader.pages)}  tagged: {tagged}  title: {reader.metadata.title if reader.metadata else None}")
        ok &= check("pypdf", "\n".join(p.extract_text() for p in reader.pages), cv)
        ok &= check("pdfminer", extract_text(path), cv)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
