import styles from "./Footer.module.scss";
import { FaGithub } from "react-icons/fa";
import WikipediaIcon from "../../media/wikipedia.png";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <section>
        <h2>Contact Me</h2>
      </section>
      <section>
        <h2>References</h2>
        <div>
          <FaGithub className={styles["github-icon"]} />
          <p>GitHub</p>
        </div>
        <div>
          <img
            src={WikipediaIcon}
            alt="Wikipedia logo"
            height="40px"
            width="40px"
          />
          <p>Wikipedia</p>
        </div>
      </section>
      <p>&copy; 2023 Alberto Torrigiotti</p>
    </footer>
  );
};

export default Footer;
