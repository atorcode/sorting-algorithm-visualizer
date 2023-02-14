import styles from "./VisualizerHero.module.scss";
import HeroImage from "../HeroImage";
import VisualizerHeroHeading from "../VisualizerHeroHeading";
import VisualizerControls from "../VisualizerControls";
import VisualizerBars from "../VisualizerBars";
import { useEffect, useState } from "react";

const VisualizerHero = ({ name }) => {
  const [numBars, setNumBars] = useState(10);
  const [barsToRender, setBarsToRender] = useState([]);

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
    const shuffledBars = bars;
    let currentIndex = shuffledBars.length - 1;

    while (currentIndex > 0) {
      // randomIndex will always be different from currentIndex, so each bar will always shuffle
      const randomIndex = Math.floor(Math.random() * currentIndex);

      const temp = shuffledBars[currentIndex];
      shuffledBars[currentIndex] = shuffledBars[randomIndex];
      shuffledBars[randomIndex] = temp;

      currentIndex--;
    }

    // responsible for physically rearranging bars
    for (let i = 0; i < bars.length; i++) {
      shuffledBars[i].left = calcLeftPosPercentage(bars.length, i + 1);
    }

    return shuffledBars;
  };

  useEffect(() => {
    setBarsToRender(shuffleBars(createBarArray(numBars)));
  }, [numBars]);

  return (
    <main className={styles["main"]}>
      <div className={styles["content-container"]}>
        <VisualizerHeroHeading name={name} />
        <VisualizerControls
          numBars={numBars}
          setNumBars={setNumBars}
          shuffleBars={shuffleBars}
          setBarsToRender={setBarsToRender}
          createBarArray={createBarArray}
        />
        <VisualizerBars barsToRender={barsToRender} />
      </div>
      <HeroImage />
    </main>
  );
};

export default VisualizerHero;
