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

  // Modifies original array
  const swapBarsMutable = (bar1, bar2) => {
    const tempLeft = bar1.left;
    bar1.left = bar2.left;
    bar2.left = tempLeft;

    const temp = bar1;
    bar1 = bar2;
    bar2 = temp;
  };

  // Does not modify original array
  const swapBarsImmutable = (bars, bar1, bar2) => {
    if (!bars || !bar1 || !bar2) {
      return;
    }

    const _bars = [];

    for (let i = 0; i < bars.length; i++) {
      if (bars[i].correctPos === bar1.correctPos) {
        _bars.push(bar2);
        _bars[i].left = bar2.left;
      } else if (bars[i].correctPos === bar2.correctPos) {
        _bars.push(bar1);
        _bars[i].left = bar1.left;
      } else {
        _bars.push(bars[i]);
      }
    }

    return _bars;
  };

  const initBars = (bars) => {
    let currentIndex = bars.length - 1;
    while (currentIndex > 0) {
      // randomIndex is always different from currentIndex, so each bar will always shuffle
      const randomIndex = Math.floor(Math.random() * currentIndex);
      swapBarsMutable(bars[currentIndex], bars[randomIndex]);
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
    setBarsToRender(bars);
    return bars;
    // return initBars(bars);
  };

  const shuffleBars = (bars) => {
    let currentIndex = bars.length - 1;
    while (currentIndex > 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      setTimeout(() => {
        setBarsToRender((prev) => {
          const updatedBars = swapBarsImmutable(
            prev,
            prev[currentIndex],
            prev[randomIndex]
          );
          return updatedBars;
        });
      }, 50 * (bars.length - currentIndex));
      currentIndex--;
    }
  };

  useEffect(() => {
    createBarArray(numBars);
  }, [numBars]);

  useEffect(() => {
    console.log(barsToRender);
  }, [barsToRender]);

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
