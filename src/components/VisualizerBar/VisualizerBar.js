import styles from "./VisualizerBar.module.scss";
import { useAnimationContext } from "../../contexts/AnimationContext";

const VisualizerBar = ({ height, width, left, index }) => {
  const { isPlaying, highlightedIndex } = useAnimationContext();
  return (
    <div
      className={
        isPlaying && index === highlightedIndex.current
          ? `${styles["bar-highlighted"]} ${styles["bar"]}`
          : `${styles["bar"]}`
      }
      style={{
        height: `${height}%`,
        width: `${width}%`,
        left: `${left}%`,
      }}
    ></div>
  );
};

export default VisualizerBar;
