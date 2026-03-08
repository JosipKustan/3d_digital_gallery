import { useState } from "react";
import {
  BrandName,
  DesktopNavWrapper,
  MenuItem,
  MenuList,
} from "./NavMenuStyles.js";

function DesktopNavMenu() {
  return (
    <DesktopNavWrapper>
      <BrandName>CREATIVE STUDIO KUKI</BrandName>

      <MenuList>
        <MenuItem href="/">Home</MenuItem>
        <MenuItem href="/gallery">Gallery</MenuItem>
        <MenuItem href="/services">Services</MenuItem>
        <MenuItem href="/contact">Contact</MenuItem>
      </MenuList>
    </DesktopNavWrapper>
  );
}
export default DesktopNavMenu;
