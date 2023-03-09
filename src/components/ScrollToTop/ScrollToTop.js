import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("beforeunload", scrollToTop);
    return () => {
      window.removeEventListener("beforeunload", scrollToTop);
    };
  }, []);

  return null;
};

export default ScrollToTop;
