import styles from "./ExpandedNavBar.module.scss";
import { MdHome } from "react-icons/md";
import { TbAntennaBars5 } from "react-icons/tb";
import { useState, useEffect, useRef } from "react";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";
import ExpandedNavBarButton from "../ExpandedNavBarButton";
import ExpandedNavBarAlgorithmType from "../ExpandedNavBarAlgorithmType";

const ExpandedNavBar = () => {
  // The purpose of justMounted is to ensure that the click event which opens this component does not also simultaneously close this component.
  const [justMounted, setJustMounted] = useState(true);
  const [viewportIsSmall, setViewportIsSmall] = useState(false);
  const expandedNavBarEl = useRef(null);
  const { setNavIsExpanded } = useExpandedNavBarContext();

  const handleOutsideClick = (e) => {
    if (
      !justMounted &&
      expandedNavBarEl.current &&
      !expandedNavBarEl.current.contains(e.target)
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
    setJustMounted(false);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [justMounted]);

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
      <nav ref={expandedNavBarEl} className={styles["expanded-nav-bar"]}>
        <a href="/">
          <div className={styles["categories"]}>
            <MdHome className={styles["icons"]} />
            <h2>Home</h2>
          </div>
        </a>
        <div className={styles["divider-line"]}></div>
        <div className={`${styles["algorithms"]} ${styles["categories"]}`}>
          <TbAntennaBars5 className={styles["icons"]} />
          <h2>Algorithms</h2>
        </div>
        <ul>
          <ExpandedNavBarAlgorithmType name={"Quick Sort"} link={"#"} />
          <ExpandedNavBarAlgorithmType name={"Merge Sort"} link={"#"} />
          <ExpandedNavBarAlgorithmType name={"Bubble Sort"} link={"#"} />
          <ExpandedNavBarAlgorithmType name={"Selection Sort"} link={"#"} />
          <ExpandedNavBarAlgorithmType name={"Insertion Sort"} link={"#"} />
        </ul>
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
