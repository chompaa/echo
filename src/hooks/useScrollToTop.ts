import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // scroll behaviour is set on root, not html or body
    document.getElementById("root")?.scrollTo(0, 0);
  }, [pathname]);
}

export default useScrollToTop;
