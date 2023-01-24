import styles from "./ContextMenuCloser.module.scss";
import { useEffect } from "react";

const ContextMenuCloser = ({ isExpanded, setIsExpanded }) => {
  return (
    <div
      className={styles["context-menu-closer"]}
      onClick={() => {
        setIsExpanded(false);
      }}
    ></div>
  );
};

export default ContextMenuCloser;
