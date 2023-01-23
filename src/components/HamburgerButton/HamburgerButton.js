import styles from "./HamburgerButton.module.scss";
import { HiBars3 } from "react-icons/hi2";

const HamburgerButton = () => {
  return (
    <div className={styles["hamburger-btn-container"]}>
      <HiBars3 className={styles["hamburger-btn"]} />
    </div>
  );
};

export default HamburgerButton;
