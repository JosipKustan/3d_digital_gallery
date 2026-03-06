// hooks/useIsPathname.js
import { useRouter } from "next/router";

export const useIsPathname = (pathname) => {
  const router = useRouter();
  return router.pathname === pathname;
};
