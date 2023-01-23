import styles from "./ExpandedNavBar.module.scss";

const ExpandedNavBar = () => {
  return (
    <nav className={styles["expanded-nav-bar"]}>
      <ul>
        <li>hardcoded option # 1</li>
        <li>hardcoded option # 2</li>
        <li>hardcoded option # 3</li>
      </ul>
    </nav>
  );
};

export default ExpandedNavBar;
