import styles from "./VisualizerControls.module.scss";
import VisualizerButton from "../VisualizerButton";
import VisualizerSlider from "../VisualizerSlider";

const VisualizerControls = (propsToPass) => {
  return (
    <section className={styles["controls"]}>
      <VisualizerButton type={"shuffle"} />
      <VisualizerButton type={"play"} />
      <VisualizerSlider {...propsToPass} />
    </section>
  );
};

export default VisualizerControls;
