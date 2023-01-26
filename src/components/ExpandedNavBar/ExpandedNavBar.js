import styles from "./ExpandedNavBar.module.scss";
import { MdHome } from "react-icons/md";
import { TbAntennaBars5 } from "react-icons/tb";
import { useState, useEffect, useRef } from "react";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const ExpandedNavBar = () => {
  // The purpose of justMounted is to ensure that the click event which opens this component does not also simultaneously close this component.
  const [justMounted, setJustMounted] = useState(true);
  const expandedNavBarEl = useRef(null);
  const { navIsExpanded, setNavIsExpanded } = useExpandedNavBarContext();

  const handleOutsideClick = (e) => {
    if (
      !justMounted &&
      expandedNavBarEl.current &&
      !expandedNavBarEl.current.contains(e.target)
    ) {
      setNavIsExpanded(false);
    }
  };

  useEffect(() => {
    setJustMounted(false);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [justMounted]);

  return (
    <>
      <nav ref={expandedNavBarEl} className={styles["expanded-nav-bar"]}>
        <a href="/">
          <div className={styles["home"]}>
            <MdHome className={styles["icons"]} />
            <h2>Home</h2>
          </div>
        </a>
        <div className={styles["divider-line"]}></div>
        <div className={styles["algorithms"]}>
          <TbAntennaBars5 className={styles["icons"]} />
          <h2>Algorithms</h2>
        </div>
        <ul>
          <li>
            <a href="#">Quick Sort</a>
          </li>
          <li>
            <a href="#">Merge Sort</a>
          </li>
          <li>
            <a href="#">Bubble Sort</a>
          </li>
          <li>
            <a href="#">Selection Sort</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ExpandedNavBar;
