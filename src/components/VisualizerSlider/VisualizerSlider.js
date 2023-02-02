import styles from "./VisualizerSlider.module.scss";

const VisualizerSlider = ({ numBars, setNumBars }) => {
  return (
    <section className={styles["slider-section"]}>
      <h3>Elements: {numBars}</h3>
      <input
        type="range"
        value={numBars}
        min="10"
        max="1000"
        step="5"
        className={styles["slider"]}
        onChange={(e) => {
          setNumBars(e.target.value);
        }}
      ></input>
    </section>
  );
};

export default VisualizerSlider;
