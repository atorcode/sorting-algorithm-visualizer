import { Link } from "react-router-dom";
import styles from "./ExpandedNavBarAlgorithmType.module.scss";

const ExpandedNavBarAlgorithmType = ({ name }) => {
  const formatLink = (name) => {
    const hyphenatedName = name.toLowerCase().replaceAll(" ", "-");
    return `/algorithms/${hyphenatedName}`;
  };

  return (
    <>
      <li className={styles["algorithm"]}>
        <Link to={formatLink(name)} className={styles["link"]}>
          <p>{name}</p>
        </Link>
      </li>
    </>
  );
};

export default ExpandedNavBarAlgorithmType;
