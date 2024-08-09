import { useEffect, useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";

function NavMenu() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1080);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1080);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <>{isMobileView ? <MobileNavMenu /> : <DesktopNavMenu />}</>;
}
export default NavMenu;
