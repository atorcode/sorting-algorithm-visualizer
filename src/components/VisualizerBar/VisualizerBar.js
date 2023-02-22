import styles from "./VisualizerBar.module.scss";
import { useAnimationContext } from "../../contexts/AnimationContext";

const VisualizerBar = ({ height, width, left, index }) => {
  const { highlightedIndex, isPlaying } = useAnimationContext();

  console.log(index, highlightedIndex.current);
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
