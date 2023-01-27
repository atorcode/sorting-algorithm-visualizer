import styles from "./ExpandedNavBarToggleButton.module.scss";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const ExpandedNavBarToggleButton = ({ text }) => {
  const { navIsExpanded, setNavIsExpanded } = useExpandedNavBarContext();
  return (
    <button
      className={styles["button"]}
      onClick={() => {
        setNavIsExpanded(!navIsExpanded);
      }}
    >
      {text}
    </button>
  );
};

export default ExpandedNavBarToggleButton;
