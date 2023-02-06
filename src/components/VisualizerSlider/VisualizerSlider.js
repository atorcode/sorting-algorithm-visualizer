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
        className={`${styles["slider"]} ${styles["slider-top"]}`}
        onChange={(e) => {
          setNumBars(e.target.value);
        }}
      ></input>
      {/* back slider is only here for overflow: hidden + box-shadow styling of track's lefthand side */}
      <input
        type="range"
        value={numBars}
        min="10"
        max="1000"
        step="5"
        className={`${styles["slider"]} ${styles["slider-bottom"]}`}
        readOnly
      ></input>
    </section>
  );
};

export default VisualizerSlider;
