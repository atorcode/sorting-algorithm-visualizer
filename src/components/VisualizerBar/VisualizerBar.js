import styles from "./VisualizerBar.module.scss";

const VisualizerBar = ({ height, width }) => {
  return (
    <div
      className={styles["bar"]}
      style={{ height: `${height}%`, width: `${width}%` }}
    ></div>
  );
};

export default VisualizerBar;
