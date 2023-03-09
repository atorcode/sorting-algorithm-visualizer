import styles from "./ExpandedNavBarButton.module.scss";
import { useEffect, useRef } from "react";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const ExpandedNavBarButton = ({ text }) => {
  const buttonEl = useRef(null);
  const { setNavIsExpanded } = useExpandedNavBarContext();

  const toggleExpandedNavBar = (e) => {
    if (buttonEl.current && buttonEl.current.contains(e.target)) {
      setNavIsExpanded((prev) => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener("click", toggleExpandedNavBar, true);
    return () => {
      document.removeEventListener("click", toggleExpandedNavBar, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button ref={buttonEl} className={styles["button"]}>
      {text}
    </button>
  );
};

export default ExpandedNavBarButton;
