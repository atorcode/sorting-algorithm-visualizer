import styles from "./NavBar.module.scss";
import HamburgerButton from "../HamburgerButton";
import ExpandedNavBar from "../ExpandedNavBar/ExpandedNavBar";

const NavBar = () => {
  return (
    <>
      <nav className={styles["nav-bar"]}>
        <a href="/">
          <p>SORTING ALGORITHM VISUALIZER</p>
        </a>
        <HamburgerButton />
      </nav>

      <ExpandedNavBar />
    </>
  );
};

export default NavBar;
