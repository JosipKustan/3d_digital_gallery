import Link from "next/link";
import { MuckoStretchSVG } from "../app/SVG/MuckoStretchSVG";
import { FooterWrapper, StyledLink } from "./StaticStyles";

function Footer({ credit, link }) {
  return (
    <FooterWrapper>
      {credit && (
        <p>
          <StyledLink href={link} target="_blank" rel="noopener noreferrer">
            {credit}
          </StyledLink>
        </p>
      )}
      <nav aria-label="Footer navigation" style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center", marginBottom: "16px" }}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}>Home</Link>
        <Link href="/gallery" style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}>Gallery</Link>
        <Link href="/services" style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}>Services</Link>
        <Link href="/about" style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}>About</Link>
        <Link href="/contact" style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}>Contact</Link>
        <Link href="/pricing" style={{ color: "inherit", textDecoration: "none", opacity: 0.8 }}>Pricing</Link>
      </nav>
      <MuckoStretchSVG
        style={{ width: "100%", height: "100%", maxWidth: "500px" }}
      />
      <p>Still in development. Website and illustrations created in house</p>
      <p>
        &copy; <span id="year">2024 - 2026 &nbsp;</span>
        Creative Studio Kuki. All rights reserved.
      </p>
    </FooterWrapper>
  );
}
export default Footer;
