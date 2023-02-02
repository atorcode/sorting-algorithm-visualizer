import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";
import { useEffect, useMemo } from "react";

const VisualizerBars = ({ numBars }) => {
  const createBarArray = (quantity) => {
    let bars = [];
    for (let i = 0; i < quantity; i++) {
      bars.push({});
    }
    return bars;
  };

  let barsToRender = useMemo(() => createBarArray(numBars), [numBars]);

  useEffect(() => {
    barsToRender = createBarArray(numBars);
  }, [numBars]);

  return (
    <section className={styles["bars"]}>
      {barsToRender &&
        barsToRender.map((bar, index) => {
          return <VisualizerBar key={index} />;
        })}
      {/* <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar />
      <VisualizerBar /> */}
    </section>
  );
};

export default VisualizerBars;
