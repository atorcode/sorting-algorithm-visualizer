import styles from "./VisualizerHero.module.scss";
import HeroImage from "../HeroImage";
import VisualizerHeroHeading from "../VisualizerHeroHeading";
import VisualizerControls from "../VisualizerControls";
import VisualizerBars from "../VisualizerBars";
import { useEffect, useState } from "react";
import {
  calcWidthPercentage,
  calcHeightPercentage,
  calcLeftPosPercentage,
} from "../../utils/utils";

const VisualizerHero = ({ name }) => {
  const [numBars, setNumBars] = useState(100);
  const [barsToRender, setBarsToRender] = useState([]);

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

      // responsible for physically rearranging bars
      shuffledBars[currentIndex].left = calcLeftPosPercentage(
        bars.length,
        currentIndex + 1
      );
      shuffledBars[randomIndex].left = calcLeftPosPercentage(
        bars.length,
        randomIndex + 1
      );

      currentIndex--;
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
