import { Link } from "react-router-dom";
import styles from "./ExpandedNavBarAlgorithmType.module.scss";

const ExpandedNavBarAlgorithmType = ({ name, link }) => {
  return (
    <>
      <li className={styles["algorithm"]}>
        <Link to={link} className={styles["link"]}>
          <p>{name}</p>
        </Link>
      </li>
    </>
  );
};

export default ExpandedNavBarAlgorithmType;
