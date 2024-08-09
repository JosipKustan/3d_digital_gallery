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
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/gallery">Gallery</MenuItem>
        <MenuItemHash smooth to="/#contact">
          Contact
        </MenuItemHash>
      </MenuList>
    </DesktopNavWrapper>
  );
}
export default DesktopNavMenu;
