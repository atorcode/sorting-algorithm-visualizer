import styles from "./VisualizerControls.module.scss";
import VisualizerButton from "../VisualizerButton";
import VisualizerSlider from "../VisualizerSlider";
import { useEffect, useState } from "react";
import { useAnimationContext } from "../../contexts/AnimationContext";
import {
  calcWidthPercentage,
  calcHeightPercentage,
  calcLeftPosPercentage,
  calcAnimationStepTime,
} from "../../utils/utils";

const VisualizerControls = ({ name, barsToRender, setBarsToRender }) => {
  const [numBars, setNumBars] = useState(100);

  const { isPlaying, setIsPlaying, highlightedIndex, timers } =
    useAnimationContext();

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

  // Synchronous shuffle
  const initBars = (bars) => {
    let currentIndex = bars.length - 1;
    let updatedBars = [];
    while (currentIndex > 0) {
      // randomIndex is always different from currentIndex, so each bar will always shuffle
      const randomIndex = Math.floor(Math.random() * currentIndex);
      if (updatedBars.length < 1) {
        updatedBars = swapBarsImmutable(bars, currentIndex, randomIndex);
      } else {
        updatedBars = swapBarsImmutable(updatedBars, currentIndex, randomIndex);
      }
      currentIndex--;
    }
    setBarsToRender(updatedBars);
  };

  // Creates a sorted bar array of a length specified by quantity
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

  // Async shuffle
  const shuffleBars = (bars) => {
    setIsPlaying(true);
    for (let currentIndex = bars.length - 1; currentIndex > 0; currentIndex--) {
      timers.current.push(
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * currentIndex);
          highlightedIndex.current = randomIndex;
          setBarsToRender((prev) => {
            const updatedBars = swapBarsImmutable(
              prev,
              currentIndex,
              randomIndex
            );
            return updatedBars;
          });
          if (currentIndex === 1) {
            setIsPlaying(false);
          }
        }, calcAnimationStepTime(bars.length, 3000) * (bars.length - currentIndex))
      );
    }
  };

  // Sorts

  // use switches with name parameter probably
  const quickSort = () => {
    console.log("quick");
  };

  const mergeSort = () => {
    console.log("merge");
  };

  const bubbleSort = () => {
    for (let i = 0; i < barsToRender.length; i++) {
      timers.current.push(
        setTimeout(() => {
          if (i === barsToRender.length - 1) {
            setIsPlaying(false);
            return;
          }
          for (let j = 0; j < barsToRender.length - 1; j++) {
            setBarsToRender((prev) => {
              if (prev[j].correctPos > prev[j + 1].correctPos) {
                return swapBarsImmutable(prev, j, j + 1);
              }
              return prev;
            });
          }
        }, 100 * i)
      );
    }
  };

  const selectionSort = () => {
    // loop until i <= barsToRender.length - 1 instead of i < barsToRender.length - 1 so that there we can conveniently setIsPlaying to false and exit
    for (let i = 0; i <= barsToRender.length - 1; i++) {
      timers.current.push(
        setTimeout(() => {
          if (i === barsToRender.length - 1) {
            setIsPlaying(false);
            return;
          }
          setBarsToRender((prev) => {
            let min = prev[i];
            let minIdx = i;

            for (let j = i + 1; j < prev.length; j++) {
              if (prev[j].correctPos < min.correctPos) {
                min = prev[j];
                minIdx = j;
              }
            }
            highlightedIndex.current = minIdx;

            return swapBarsImmutable(prev, i, minIdx);
          });
        }, 100 * i)
      );
    }
  };

  // if (i === barsToRender.length - 1) {
  //   setIsPlaying(false);
  //   return;
  // }

  // broken
  // const insertionSort = () => {
  //   for (let i = 1; i < barsToRender.length; i++) {
  //     let j = i;
  //     while (
  //       j > 0 &&
  //       barsToRender[j - 1].correctPos > barsToRender[j].correctPos
  //     ) {
  //       timers.current.push(
  //         setTimeout(() => {
  //           setBarsToRender((prev) => {
  //             const updatedBars = swapBarsImmutable(prev, j - 1, j);
  //             j = j - 1;
  //             return updatedBars;
  //           });
  //         }, 100 * i)
  //       );
  //     }
  //   }
  // };

  const insertionSort = (i = 1) => {
    if (i === barsToRender.length) {
      return;
    }
    let j = i;
    while (
      j > 0 &&
      barsToRender[j - 1].correctPos > barsToRender[j].correctPos
    ) {
      setBarsToRender((prev) => {
        const updatedBars = swapBarsImmutable(prev, j - 1, j);
        j = j - 1;
        return updatedBars;
      });
    }
    setTimeout(() => {
      insertionSort(i + 1);
    }, 100);
  };

  let algorithmToPlay;
  switch (name) {
    case "quick sort":
      algorithmToPlay = quickSort;
      break;
    case "merge sort":
      algorithmToPlay = mergeSort;
      break;
    case "bubble sort":
      algorithmToPlay = bubbleSort;
      break;
    case "selection sort":
      algorithmToPlay = selectionSort;
      break;
    case "insertion sort":
      algorithmToPlay = insertionSort;
      break;
  }

  useEffect(() => {
    createBarArray(numBars);
  }, [numBars]);

  useEffect(() => {
    if (!isPlaying) {
      highlightedIndex.current = null;
    }
  }, [isPlaying]);

  return (
    <section className={styles["controls"]}>
      <VisualizerButton
        type={"shuffle"}
        shuffleBars={shuffleBars}
        barsToRender={barsToRender}
      />
      <VisualizerButton
        type={"play"}
        barsToRender={barsToRender}
        algorithmToPlay={algorithmToPlay}
      />
      <VisualizerSlider numBars={numBars} setNumBars={setNumBars} />
    </section>
  );
};

export default VisualizerControls;
