import styles from "./HamburgerButton.module.scss";
import { FaBars } from "react-icons/fa";

const HamburgerButton = () => {
  return (
    <div className={styles["hamburger-btn-container"]}>
      <FaBars className={styles["hamburger-btn"]} />
    </div>
  );
};

export default HamburgerButton;
