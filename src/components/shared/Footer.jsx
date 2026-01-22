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
      <MuckoStretchSVG />
      <p>Still in development. Website and illustrations created in house</p>
      <p>
        &copy; <span id="year">2024 - 2026 &nbsp;</span>
        Creative Studio Kuki. All rights reserved.
      </p>
    </FooterWrapper>
  );
}
export default Footer;
