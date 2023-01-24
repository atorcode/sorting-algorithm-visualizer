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
          <p>SORTING ALGORITHM VISUALIZER</p>
        </a>
        <HamburgerButton
          isExpanded={isExpanded}
          setIsExpanded={setIsExpanded}
        />
      </nav>
      {isExpanded && <ExpandedNavBar />}
    </>
  );
};

export default NavBar;
