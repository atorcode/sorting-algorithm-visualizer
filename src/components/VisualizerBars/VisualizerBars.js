import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";

const VisualizerBars = () => {
  return (
    <section className={styles["bars"]}>
      <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar />
    </section>
  );
};

export default VisualizerBars;
