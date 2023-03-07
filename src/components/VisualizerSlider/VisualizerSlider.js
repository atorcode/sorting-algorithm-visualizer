import styles from "./VisualizerSlider.module.scss";
import { useAnimationContext } from "../../contexts/AnimationContext";

const VisualizerSlider = () => {
  const { setIsPlaying, timers, numBars, setNumBars } = useAnimationContext();
  return (
    <section className={styles["slider-section"]}>
      <h3>Elements: {numBars}</h3>
      <input
        type="range"
        value={numBars}
        min="10"
        max="500"
        step="5"
        className={`${styles["slider"]} ${styles["slider-top"]}`}
        onChange={(e) => {
          setIsPlaying(false);
          setNumBars(e.target.value);
          timers.current.forEach((timer) => {
            clearTimeout(timer);
          });
        }}
      ></input>
      {/* back slider is only here for overflow: hidden + box-shadow styling of track's lefthand side */}
      <input
        type="range"
        value={numBars}
        min="10"
        max="500"
        step="5"
        className={`${styles["slider"]} ${styles["slider-bottom"]}`}
        readOnly
      ></input>
    </section>
  );
};

export default VisualizerSlider;
