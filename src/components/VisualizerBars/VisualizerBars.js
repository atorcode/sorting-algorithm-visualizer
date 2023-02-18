import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";

const VisualizerBars = ({ barsToRender }) => {
  return (
    <section className={styles["bars"]}>
      {barsToRender &&
        barsToRender.map((bar) => {
          return <VisualizerBar key={bar.correctPos} {...bar} />;
        })}
    </section>
  );
};

export default VisualizerBars;
