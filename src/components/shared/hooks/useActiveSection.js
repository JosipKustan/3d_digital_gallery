import { useEffect, useState } from "react";

/**
 * Tracks which section is in the upper part of the viewport, for SectionNav.
 * A section has to stay in view for 300ms before it becomes active, so fast
 * scrolling does not flicker through every pill.
 * @param {string[]} ids  Element ids of the observed sections.
 * @returns {[string|null, Function]} Active id and its setter (for nav clicks).
 */
export default function useActiveSection(ids) {
  const [activeSection, setActiveSection] = useState(null);
  const idsKey = ids.join(",");

  useEffect(() => {
    const timers = {};
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            timers[e.target.id] = setTimeout(
              () => setActiveSection(e.target.id),
              300,
            );
          } else {
            clearTimeout(timers[e.target.id]);
            delete timers[e.target.id];
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    idsKey.split(",").forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      Object.values(timers).forEach(clearTimeout);
    };
  }, [idsKey]);

  return [activeSection, setActiveSection];
}
