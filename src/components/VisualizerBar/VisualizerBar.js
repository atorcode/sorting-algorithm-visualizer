import styles from "./VisualizerBar.module.scss";

const VisualizerBar = ({ height, width, left }) => {
  return (
    <div
      className={styles["bar"]}
      style={{
        height: `${height}%`,
        width: `${width}%`,
        left: `${left}%`,
      }}
    ></div>
  );
};

export default VisualizerBar;
