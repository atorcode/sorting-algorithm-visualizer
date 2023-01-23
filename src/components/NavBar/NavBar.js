import styles from "./NavBar.module.scss";
import HamburgerButton from "../HamburgerButton";

const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      <a href="/">
        <p>SORTING ALGORITHM VISUALIZER</p>
      </a>
      <HamburgerButton />
    </nav>
  );
};

export default NavBar;
