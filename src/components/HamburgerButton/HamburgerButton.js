import styles from "./HamburgerButton.module.scss";
import { HiBars3 } from "react-icons/hi2";

const HamburgerButton = ({ navIsExpanded, setNavIsExpanded }) => {
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
