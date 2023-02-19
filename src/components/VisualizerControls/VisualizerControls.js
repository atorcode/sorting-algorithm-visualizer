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
  isShuffling,
  setIsShuffling,
  timers,
}) => {
  return (
    <section className={styles["controls"]}>
      <VisualizerButton
        type={"shuffle"}
        shuffleBars={shuffleBars}
        barsToRender={barsToRender}
        setBarsToRender={setBarsToRender}
        createBarArray={createBarArray}
        numBars={numBars}
        isShuffling={isShuffling}
        setIsShuffling={setIsShuffling}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <VisualizerButton
        type={"play"}
        isShuffling={isShuffling}
        setIsShuffling={setIsShuffling}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <VisualizerSlider
        numBars={numBars}
        setNumBars={setNumBars}
        setIsShuffling={setIsShuffling}
        setIsPlaying={setIsPlaying}
        timers={timers}
      />
    </section>
  );
};

export default VisualizerControls;
