import styles from "./HamburgerButton.module.scss";
import { useEffect, useRef } from "react";
import { HiBars3 } from "react-icons/hi2";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const HamburgerButton = () => {
  const { navIsExpanded, setNavIsExpanded } = useExpandedNavBarContext();

  const buttonEl = useRef(null);

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
    <button ref={buttonEl} className={styles["hamburger-btn"]}>
      <HiBars3 className={styles["hamburger-icon"]} />
    </button>
  );
};

export default HamburgerButton;
