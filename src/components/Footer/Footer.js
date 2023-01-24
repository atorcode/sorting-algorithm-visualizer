import styles from "./Footer.module.scss";
import { FaGithub } from "react-icons/fa";
import WikipediaIcon from "../../media/wikipedia.png";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <article>
        <section>
          <h2>Contact Me</h2>
          <p className={styles["margin-top"]}>atorcode@gmail.com</p>
        </section>
        <section>
          <h2>References</h2>
          <a
            href="https://github.com/atorcode/sorting-algorithm-visualizer"
            target="_blank"
            className={styles["margin-top"]}
          >
            <FaGithub className={styles["github-icon"]} />
            <p>GitHub</p>
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Sorting_algorithm"
            target="_blank"
            className={styles["margin-top"]}
          >
            <img
              src={WikipediaIcon}
              alt="Wikipedia logo"
              height="40px"
              width="40px"
            />
            <p>Wikipedia</p>
          </a>
        </section>
      </article>
      <p className={styles["copyright-text"]}>
        &copy; 2023 Alberto Torrigiotti
      </p>
    </footer>
  );
};

export default Footer;
