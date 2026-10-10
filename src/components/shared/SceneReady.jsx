import { useEffect } from "react";

// Render inside a <Suspense> boundary: it only mounts once everything
// before it in that boundary has finished loading.
export default function SceneReady({ onReady }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
}
