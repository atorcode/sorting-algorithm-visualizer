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

  // Modifies original array (this implementation with bar object parameters seems to perform better than passing in indices)
  const swapBarsMutable = (bar1, bar2) => {
    const tempLeft = bar1.left;
    bar1.left = bar2.left;
    bar2.left = tempLeft;

    const temp = bar1;
    bar1 = bar2;
    bar2 = temp;
  };

  // Does not modify original array
  const swapBarsImmutable = (bars, idx1, idx2) => {
    return bars.map((bar, i, arr) => {
      if (i === idx1) {
        return { ...arr[idx2], left: arr[idx1].left };
      } else if (i === idx2) {
        return { ...arr[idx1], left: arr[idx2].left };
      } else {
        return bar;
      }
    });
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
    return initBars(bars);
  };

  const shuffleBars = (bars) => {
    for (let currentIndex = bars.length - 1; currentIndex > 0; currentIndex--) {
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * currentIndex);

        setBarsToRender((prev) => {
          const updatedBars = swapBarsImmutable(
            prev,
            currentIndex,
            randomIndex
          );
          return updatedBars;
        });
      }, 20 * (bars.length - currentIndex));
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
