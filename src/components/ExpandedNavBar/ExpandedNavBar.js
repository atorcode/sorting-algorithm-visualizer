import styles from "./ExpandedNavBar.module.scss";
import { MdHome } from "react-icons/md";
import { TbAntennaBars5 } from "react-icons/tb";

const ExpandedNavBar = () => {
  return (
    <nav className={styles["expanded-nav-bar"]}>
      <section className={styles["home-section"]}>
        <MdHome className={styles["icons"]} />
        <h2>Home</h2>
      </section>
      <section>
        <TbAntennaBars5 className={styles["icons"]} />
        <h2>Algorithms</h2>
        {/* following list is formatted with flex-wrap to have desired styling while being a child of this section element, which is more semantic. Could alternatively use grid instead of flex-wrap, but the width of the nav bar is constant, so this solution works fine. */}
        <ul>
          <li>Quick Sort</li>
          <li>Merge Sort</li>
          <li>Bubble Sort</li>
          <li>Selection Sort</li>
        </ul>
      </section>
    </nav>
  );
};

export default ExpandedNavBar;
