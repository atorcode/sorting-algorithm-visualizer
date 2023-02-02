import styles from "./VisualizerControls.module.scss";
import VisualizerButton from "../VisualizerButton";
import VisualizerSlider from "../VisualizerSlider";

const VisualizerControls = () => {
  return (
    <section className={styles["controls"]}>
      <VisualizerButton />
      <VisualizerButton />
      <VisualizerSlider />
    </section>
  );
};

export default VisualizerControls;
