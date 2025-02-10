import { useEffect, useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";
import useIsMobileView from "../../shared/hooks/useIsMobileView";

function NavMenu() {
  const isMobileView = useIsMobileView();

  return <>{isMobileView ? <MobileNavMenu /> : <DesktopNavMenu />}</>;
}

export default NavMenu;
