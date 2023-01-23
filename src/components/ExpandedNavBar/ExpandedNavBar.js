import styles from "./ExpandedNavBar.module.scss";
import { MdHome } from "react-icons/md";

const ExpandedNavBar = () => {
  return (
    <nav className={styles["expanded-nav-bar"]}>
      <MdHome className={styles["icons"]} />
      <ul>
        <li>hardcoded option # 1</li>
        <li>hardcoded option # 2</li>
        <li>hardcoded option # 3</li>
      </ul>
    </nav>
  );
};

export default ExpandedNavBar;
