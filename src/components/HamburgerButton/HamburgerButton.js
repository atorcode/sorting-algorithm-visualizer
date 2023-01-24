import styles from "./HamburgerButton.module.scss";
import { HiBars3 } from "react-icons/hi2";

const HamburgerButton = ({ isExpanded, setIsExpanded }) => {
  return (
    <button
      className={styles["hamburger-btn"]}
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      <HiBars3 className={styles["hamburger-icon"]} />
    </button>
  );
};

export default HamburgerButton;
