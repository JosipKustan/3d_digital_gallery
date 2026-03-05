import { useState } from "react";
import {
  BrandName,
  DesktopNavWrapper,
  MenuItem,
  MenuItemHash,
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
        <MenuItemHash href="/#contact">Contact</MenuItemHash>
      </MenuList>
    </DesktopNavWrapper>
  );
}
export default DesktopNavMenu;
