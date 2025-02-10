import { useState, useEffect } from "react";

function useIsMobileView(breakpoint = 1080) {
  const [isMobileView, setIsMobileView] = useState(
    window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobileView;
}

export default useIsMobileView;
