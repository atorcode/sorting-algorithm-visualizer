import styles from "./VisualizerSlider.module.scss";

const VisualizerSlider = () => {
  return (
    <section className={styles["slider-section"]}>
      <h3>Elements: NUMBER</h3>
      <input
        type="range"
        value="100"
        min="10"
        max="1000"
        step="5"
        className={styles["slider"]}
      ></input>
    </section>
  );
};

export default VisualizerSlider;
