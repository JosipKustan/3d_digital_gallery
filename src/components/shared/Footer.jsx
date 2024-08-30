import { MuckoStretchSVG } from "../app/SVG/MuckoStretchSVG";
import { FooterWrapper } from "./StaticStyles";

function Footer() {
  return (
    <FooterWrapper>
      <MuckoStretchSVG />
      <p>Still in development. Website and illustrations created by me</p>
      <p>
        &copy; <span id="year">2024</span>
        Creative Studio Kuki. All rights reserved.
      </p>
    </FooterWrapper>
  );
}
export default Footer;
