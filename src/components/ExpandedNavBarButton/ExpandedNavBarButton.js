import styles from "./ExpandedNavBarButton.module.scss";
import { useEffect, useRef } from "react";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const ExpandedNavBarButton = ({ text }) => {
  const buttonEl = useRef(null);
  const { navIsExpanded, setNavIsExpanded } = useExpandedNavBarContext();
  const toggleExpandedNavBar = (e) => {
    if (buttonEl.current && buttonEl.current.contains(e.target)) {
      setNavIsExpanded(!navIsExpanded);
    }
  };

  useEffect(() => {
    document.addEventListener("click", toggleExpandedNavBar, true);
    return () => {
      document.removeEventListener("click", toggleExpandedNavBar, true);
    };
  }, []);

  return (
    <button ref={buttonEl} className={styles["button"]}>
      {text}
    </button>
  );
};

export default ExpandedNavBarButton;
