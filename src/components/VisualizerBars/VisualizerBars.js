import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";

const VisualizerBars = ({ barsToRender, hlIndex }) => {
  return (
    <section className={styles["bars"]}>
      {barsToRender &&
        barsToRender.map((bar, index) => {
          return (
            <VisualizerBar
              key={bar.correctPos}
              index={index}
              hlIndex={hlIndex}
              {...bar}
            />
          );
        })}
    </section>
  );
};

export default VisualizerBars;
