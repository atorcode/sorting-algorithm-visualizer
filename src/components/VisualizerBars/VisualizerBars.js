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
      bars.push({ correctPos: i, height: height, width: width, left: left });
    }
    return bars;
  };

  const shuffleBars = (bars) => {
    let currentIndex = bars.length - 1;

    while (currentIndex > 0) {
      // randomIndex will always be different from currentIndex, so each bar will always shuffle
      const randomIndex = Math.floor(Math.random() * currentIndex);

      const temp = bars[currentIndex];
      bars[currentIndex] = bars[randomIndex];
      bars[randomIndex] = temp;

      currentIndex--;
    }

    // responsible for physically rearranging bars
    for (let i = 0; i < bars.length; i++) {
      bars[i].left = calcLeftPosPercentage(bars.length, i + 1);
    }

    return bars;
  };

  console.log(shuffleBars(createBarArray(20)));

  let barsToRender = useMemo(
    () => shuffleBars(createBarArray(numBars)),
    [numBars]
  );

  // useEffect(() => {
  //   barsToRender = createBarArray(numBars);
  // }, [numBars]);

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
