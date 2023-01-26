import styles from "./NavBar.module.scss";
import HamburgerButton from "../HamburgerButton";
import ExpandedNavBar from "../ExpandedNavBar/ExpandedNavBar";
import ContextMenuCloser from "../ContextMenuCloser";

const NavBar = ({ navIsExpanded, setNavIsExpanded }) => {
  return (
    <>
      <nav className={styles["nav-bar"]}>
        <a href="/">
          <p>SORTING ALGORITHM VISUALIZER</p>
        </a>
        <HamburgerButton
          navIsExpanded={navIsExpanded}
          setNavIsExpanded={setNavIsExpanded}
        />
      </nav>
      {navIsExpanded && <ExpandedNavBar />}
      {navIsExpanded && (
        <ContextMenuCloser
          navIsExpanded={navIsExpanded}
          setNavIsExpanded={setNavIsExpanded}
        />
      )}
    </>
  );
};

export default NavBar;
