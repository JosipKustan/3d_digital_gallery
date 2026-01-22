import { useCallback } from "react";

export const useOpenLink = () => {
  const openLink = useCallback((url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  return { openLink };
};
