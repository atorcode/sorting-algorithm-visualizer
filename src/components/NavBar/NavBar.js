import styles from "./NavBar.module.scss";
import HamburgerButton from "../HamburgerButton";
import ExpandedNavBar from "../ExpandedNavBar/ExpandedNavBar";
import ContextMenuCloser from "../ContextMenuCloser";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const NavBar = () => {
  const { navIsExpanded } = useExpandedNavBarContext();
  return (
    <>
      <nav className={styles["nav-bar"]}>
        <a href="/">
          <p>SORTING ALGORITHM VISUALIZER</p>
        </a>
        <HamburgerButton />
      </nav>
      {navIsExpanded && <ExpandedNavBar />}
      {navIsExpanded && <ContextMenuCloser />}
    </>
  );
};

export default NavBar;
