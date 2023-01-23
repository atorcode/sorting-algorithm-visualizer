import styles from "./HamburgerButton.module.scss";
import { FaBars } from "react-icons/fa";

const HamburgerButton = () => {
  return (
    <>
      <FaBars className={styles["hamburger-btn"]} />
    </>
  );
};

export default HamburgerButton;
