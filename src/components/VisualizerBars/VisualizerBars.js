import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";
import { useEffect, useMemo } from "react";

const VisualizerBars = ({ numBars, createBarArray, shuffleBars }) => {
  let barsToRender = useMemo(
    () => shuffleBars(createBarArray(numBars)),
    [numBars]
  );

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
