import { useCallback, useSyncExternalStore } from "react";

function subscribe(onChange) {
  window.addEventListener("resize", onChange);
  return () => window.removeEventListener("resize", onChange);
}

// Server render and hydration use false, then the real value takes over
function useIsMobileView(breakpoint = 1080) {
  const getSnapshot = useCallback(
    () => window.innerWidth <= breakpoint,
    [breakpoint],
  );
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

export default useIsMobileView;
