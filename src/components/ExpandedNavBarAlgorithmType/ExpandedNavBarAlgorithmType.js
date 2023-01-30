import styles from "./ExpandedNavBarAlgorithmType.module.scss";

const ExpandedNavBarAlgorithmType = ({ name, link }) => {
  return (
    <>
      <li className={styles["algorithm"]}>
        <a href={link}>{name}</a>
      </li>
    </>
  );
};

export default ExpandedNavBarAlgorithmType;
