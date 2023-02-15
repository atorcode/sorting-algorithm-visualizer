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
  const [shuffleIsDisabled, setShuffleIsDisabled] = useState(false);

  return (
    <section className={styles["controls"]}>
      <VisualizerButton
        type={"shuffle"}
        shuffleBars={shuffleBars}
        setBarsToRender={setBarsToRender}
        createBarArray={createBarArray}
        numBars={numBars}
        shuffleIsDisabled={shuffleIsDisabled}
        setShuffleIsDisabled={setShuffleIsDisabled}
      />
      <VisualizerButton
        type={"play"}
        shuffleIsDisabled={shuffleIsDisabled}
        setShuffleIsDisabled={setShuffleIsDisabled}
      />
      <VisualizerSlider numBars={numBars} setNumBars={setNumBars} />
    </section>
  );
};

export default VisualizerControls;
