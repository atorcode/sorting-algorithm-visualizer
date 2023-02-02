import styles from "./VisualizerControls.module.scss";
import VisualizerButton from "../VisualizerButton";
import VisualizerSlider from "../VisualizerSlider";

const VisualizerControls = () => {
  return (
    <section className={styles["controls"]}>
      <VisualizerButton type={"shuffle"} />
      <VisualizerButton type={"play"} />
      <VisualizerSlider />
    </section>
  );
};

export default VisualizerControls;
