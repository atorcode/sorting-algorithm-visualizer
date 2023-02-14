import styles from "./VisualizerBars.module.scss";
import VisualizerBar from "../VisualizerBar";
import { useEffect, useMemo } from "react";

const VisualizerBars = ({ numBars }) => {
  const calcWidthPercentage = (quantity) => {
    return 100 / quantity;
  };

  const calcHeightPercentage = (quantity, multiplier) => {
    return (100 / quantity) * multiplier;
  };

  const calcLeftPosPercentage = (quantity, multiplier) => {
    return (
      calcWidthPercentage(quantity) * multiplier - calcWidthPercentage(quantity)
    );
  };

  const createBarArray = (quantity) => {
    let bars = [];
    const width = calcWidthPercentage(quantity);
    for (let i = 0; i < quantity; i++) {
      const height = calcHeightPercentage(quantity, i + 1);
      const left = calcLeftPosPercentage(quantity, i + 1);
      bars.push({ height: height, width: width, left: left });
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
          return <VisualizerBar key={index} {...bar} />;
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
