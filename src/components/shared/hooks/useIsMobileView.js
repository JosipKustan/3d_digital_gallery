import { useState, useEffect } from "react";

function useIsMobileView(breakpoint = 1080) {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(window.innerWidth <= breakpoint);

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobileView;
}

export default useIsMobileView;
