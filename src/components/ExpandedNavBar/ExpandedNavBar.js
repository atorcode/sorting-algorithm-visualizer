import styles from "./ExpandedNavBar.module.scss";
import { MdHome } from "react-icons/md";
import { TbAntennaBars5 } from "react-icons/tb";

const ExpandedNavBar = () => {
  return (
    <nav className={styles["expanded-nav-bar"]}>
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
  );
};

export default ExpandedNavBar;
