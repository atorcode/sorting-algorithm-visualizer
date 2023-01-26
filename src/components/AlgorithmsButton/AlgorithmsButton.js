import styles from "./AlgorithmsButton.module.scss";

const AlgorithmsButton = ({ navIsExpanded, setNavIsExpanded }) => {
  return (
    <button
      className={styles["button"]}
      onClick={() => {
        setNavIsExpanded(!navIsExpanded);
      }}
    >
      ALGORITHMS
    </button>
  );
};

export default AlgorithmsButton;
