import styles from "./VisualizerControls.module.scss";
import VisualizerButton from "../VisualizerButton";
import VisualizerSlider from "../VisualizerSlider";

const VisualizerControls = ({
  numBars,
  setNumBars,
  createBarArray,
  shuffleBars,
  barsToRender,
  setBarsToRender,
  isPlaying,
  setIsPlaying,
  timers,
}) => {
  return (
    <section className={styles["controls"]}>
      <VisualizerButton
        type={"shuffle"}
        shuffleBars={shuffleBars}
        barsToRender={barsToRender}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <VisualizerButton
        type={"play"}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        timers={timers}
      />
      <VisualizerSlider
        numBars={numBars}
        setNumBars={setNumBars}
        setIsPlaying={setIsPlaying}
        timers={timers}
      />
    </section>
  );
};

export default VisualizerControls;
