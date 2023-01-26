import styles from "./ContextMenuCloser.module.scss";
import { useEffect } from "react";

const ContextMenuCloser = ({ navIsExpanded, setNavIsExpanded }) => {
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
