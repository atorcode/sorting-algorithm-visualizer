import styles from "./NavBar.module.scss";
import HamburgerButton from "../HamburgerButton";

const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <HamburgerButton />
      <p>SORTING ALGORITHM VISUALIZER</p>
    </nav>
  );
};

export default NavBar;
