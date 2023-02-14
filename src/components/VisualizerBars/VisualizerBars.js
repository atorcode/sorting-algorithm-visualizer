import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";

const VisualizerBars = ({ barsToRender }) => {
  return (
    <section className={styles["bars"]}>
      {barsToRender &&
        barsToRender.map((bar, index) => {
          return <VisualizerBar key={index} {...bar} />;
        })}
    </section>
  );
};

export default VisualizerBars;
