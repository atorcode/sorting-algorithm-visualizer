import styles from "./VisualizerControls.module.scss";
import VisualizerButton from "../VisualizerButton";
import VisualizerSlider from "../VisualizerSlider";
import { useState } from "react";

const VisualizerControls = ({
  numBars,
  setNumBars,
  shuffleBars,
  setBarsToRender,
  createBarArray,
}) => {
  const [isShuffling, setIsShuffling] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={styles["controls"]}>
      <VisualizerButton
        type={"shuffle"}
        shuffleBars={shuffleBars}
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
      <VisualizerSlider numBars={numBars} setNumBars={setNumBars} />
    </section>
  );
};

export default VisualizerControls;
