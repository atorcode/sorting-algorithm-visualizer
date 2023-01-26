import styles from "./AlgorithmsButton.module.scss";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const AlgorithmsButton = () => {
  const { navIsExpanded, setNavIsExpanded } = useExpandedNavBarContext();
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
