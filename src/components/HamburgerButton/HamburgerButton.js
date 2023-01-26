import styles from "./HamburgerButton.module.scss";
import { HiBars3 } from "react-icons/hi2";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const HamburgerButton = () => {
  const { navIsExpanded, setNavIsExpanded } = useExpandedNavBarContext();
  return (
    <button
      className={styles["hamburger-btn"]}
      onClick={() => {
        setNavIsExpanded(!navIsExpanded);
      }}
    >
      <HiBars3 className={styles["hamburger-icon"]} />
    </button>
  );
};

export default HamburgerButton;
