import { useEffect } from "react";
import { useRouter } from "next/router";
import { MotionConfig } from "framer-motion";
import { GlobalWrapper } from "../components/shared/containers/GlobalWrapper";
import NavMenu from "../components/app/nav/NavMenu";
import "../styles/globals.css";

function ScrollToTop() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return null;
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isPortfolio = router.pathname === "/portfolio";

  return (
    // reducedMotion="user": Framer Motion skips transform animations when the
    // visitor has turned on reduced motion in their OS settings
    <MotionConfig reducedMotion="user">
      <GlobalWrapper>
        {!isPortfolio && <NavMenu />}
        <ScrollToTop />
        <Component {...pageProps} />
      </GlobalWrapper>
    </MotionConfig>
  );
}
