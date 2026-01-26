// hooks/useIsPathname.js
import { useState, useEffect } from "react";

export const useIsPathname = (pathname) => {
  const [isMatch, setIsMatch] = useState(window.location.pathname === pathname);

  useEffect(() => {
    const handlePopState = () => {
      setIsMatch(window.location.pathname === pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [pathname]);

  return isMatch;
};
