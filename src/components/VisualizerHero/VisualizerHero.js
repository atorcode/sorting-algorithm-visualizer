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
  const [isShuffling, setIsShuffling] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const swapBars = (bar1, bar2) => {
    if (!bar1 || !bar2) {
      return;
    }
    const tempLeft = bar1.left;
    bar1.left = bar2.left;
    bar2.left = tempLeft;

    const temp = bar1;
    bar1 = bar2;
    bar2 = temp;
  };

  const initBars = (bars) => {
    let currentIndex = bars.length - 1;
    while (currentIndex > 0) {
      // randomIndex will always be different from currentIndex, so each bar will always shuffle
      const randomIndex = Math.floor(Math.random() * currentIndex);
      swapBars(bars[currentIndex], bars[randomIndex]);
      currentIndex--;
    }
    setBarsToRender(bars);
  };

  const createBarArray = (quantity) => {
    let bars = [];
    const width = calcWidthPercentage(quantity);
    for (let i = 0; i < quantity; i++) {
      const height = calcHeightPercentage(quantity, i + 1);
      const left = calcLeftPosPercentage(quantity, i + 1);
      bars.push({ correctPos: i, height: height, width: width, left: left });
    }
    return initBars(bars);
  };

  const shuffleBars = (bars) => {
    const shuffledBars = bars;
    let currentIndex = shuffledBars.length - 1;

    while (currentIndex > 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      setTimeout(() => {
        swapBars(shuffledBars[currentIndex], shuffledBars[randomIndex]);
        setBarsToRender(bars);
      }, 50 * (bars.length - currentIndex));
      currentIndex--;
    }
  };

  useEffect(() => {
    createBarArray(numBars);
  }, [numBars]);

  return (
    <main className={styles["main"]}>
      <div className={styles["content-container"]}>
        <VisualizerHeroHeading name={name} />
        <VisualizerControls
          numBars={numBars}
          setNumBars={setNumBars}
          createBarArray={createBarArray}
          shuffleBars={shuffleBars}
          barsToRender={barsToRender}
          setBarsToRender={setBarsToRender}
          isShuffling={isShuffling}
          setIsShuffling={setIsShuffling}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <VisualizerBars barsToRender={barsToRender} />
      </div>
      <HeroImage />
    </main>
  );
};

export default VisualizerHero;
