import styles from "./ExpandedNavBar.module.scss";
import { MdHome } from "react-icons/md";
import { TbAntennaBars5 } from "react-icons/tb";
import { useState, useEffect, useRef } from "react";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";
import ExpandedNavBarAlgorithmTypes from "../ExpandedNavBarAlgorithmTypes";
import ExpandedNavBarButton from "../ExpandedNavBarButton";

const ExpandedNavBar = () => {
  const [viewportIsSmall, setViewportIsSmall] = useState(false);

  const expandedNavBarEl = useRef(null);
  const { navIsExpanded, setNavIsExpanded } = useExpandedNavBarContext();

  const handleOutsideClick = (e) => {
    if (
      navIsExpanded &&
      expandedNavBarEl.current &&
      !expandedNavBarEl.current.contains(e.target) &&
      expandedNavBarEl.current.classList.length > 1
    ) {
      setNavIsExpanded(false);
    }
  };

  const handleCloseButton = (e) => {
    if (window.innerWidth <= 500) {
      setViewportIsSmall(true);
    } else {
      setViewportIsSmall(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navIsExpanded]);

  useEffect(() => {
    // call handleCloseButton once to determine if button should be rendered on mount
    handleCloseButton();
    window.addEventListener("resize", handleCloseButton);
    return () => {
      window.addEventListener("resize", handleCloseButton);
    };
  }, [viewportIsSmall]);

  return (
    <>
      <nav
        ref={expandedNavBarEl}
        className={
          navIsExpanded
            ? `${styles["expanded-nav-bar-open"]} ${styles["expanded-nav-bar"]}`
            : styles["expanded-nav-bar"]
        }
      >
        <a href="/">
          <div className={`${styles["home"]} ${styles["categories"]}`}>
            <MdHome className={styles["icons"]} />
            <h2>Home</h2>
          </div>
        </a>
        <div className={styles["divider-line"]}></div>
        <div className={`${styles["algorithms"]} ${styles["categories"]}`}>
          <TbAntennaBars5 className={styles["icons"]} />
          <h2>Algorithms</h2>
        </div>
        <ExpandedNavBarAlgorithmTypes />
        {viewportIsSmall && (
          <div className={styles["close-btn-container"]}>
            <ExpandedNavBarButton text={"CLOSE"} />
          </div>
        )}
      </nav>
    </>
  );
};

export default ExpandedNavBar;
