import styles from "./NavBar.module.scss";
import HamburgerButton from "../HamburgerButton";

const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <p>SORTING ALGORITHM VISUALIZER</p>
      <HamburgerButton />
    </nav>
  );
};

export default NavBar;
