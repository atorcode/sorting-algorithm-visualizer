import styles from "./NavBar.module.scss";
import HamburgerButton from "../HamburgerButton";
import ExpandedNavBar from "../ExpandedNavBar/ExpandedNavBar";
import { useState } from "react";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <nav className={styles["nav-bar"]}>
        <a href="/">
          <p className={styles["extra-padding"]}>
            SORTING ALGORITHM VISUALIZER
          </p>
        </a>
        <button
          className={styles["extra-padding"]}
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <HamburgerButton />
        </button>
      </nav>
      {isExpanded && <ExpandedNavBar />}
    </>
  );
};

export default NavBar;
