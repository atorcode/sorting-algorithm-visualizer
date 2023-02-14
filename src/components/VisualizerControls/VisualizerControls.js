import styles from "./VisualizerControls.module.scss";
import VisualizerButton from "../VisualizerButton";
import VisualizerSlider from "../VisualizerSlider";

const VisualizerControls = ({ numBars, setNumBars, shuffleBars }) => {
  return (
    <section className={styles["controls"]}>
      <VisualizerButton type={"shuffle"} shuffleBars={shuffleBars} />
      <VisualizerButton type={"play"} />
      <VisualizerSlider numBars={numBars} setNumBars={setNumBars} />
    </section>
  );
};

export default VisualizerControls;
