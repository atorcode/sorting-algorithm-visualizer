import styles from "./ExpandedNavBarButton.module.scss";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const ExpandedNavBarButton = ({ text }) => {
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

export default ExpandedNavBarButton;
