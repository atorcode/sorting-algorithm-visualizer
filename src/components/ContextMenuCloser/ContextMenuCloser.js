import styles from "./ContextMenuCloser.module.scss";
import { useExpandedNavBarContext } from "../../contexts/ExpandedNavBarContext";

const ContextMenuCloser = () => {
  const { setNavIsExpanded } = useExpandedNavBarContext();
  return (
    <div
      className={styles["context-menu-closer"]}
      onClick={() => {
        setNavIsExpanded(false);
      }}
    ></div>
  );
};

export default ContextMenuCloser;
