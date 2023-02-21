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

  const { setIsPlaying, setHighlightedIndex, timers } = useAnimationContext();

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
    console.log(updatedBars);
    // setBarsToRender(bars);
    setBarsToRender(updatedBars);
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

  // Async
  const shuffleBars = (bars) => {
    setIsPlaying(true);
    for (let currentIndex = bars.length - 1; currentIndex > 0; currentIndex--) {
      timers.current.push(
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * currentIndex);
          setHighlightedIndex(randomIndex);
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

  useEffect(() => {
    createBarArray(numBars);
  }, [numBars]);

  // Sorts

  // use switches with name parameter probably
  const quickSort = () => {
    console.log("quick");
  };

  const mergeSort = () => {
    console.log("merge");
  };

  const bubbleSort = () => {
    console.log("bubble");
  };

  const selectionSort = (arr) => {
    // for (let i = 0; i < arr.length - 1; i++) {
    //   let min = arr[i];
    //   let minIndex = i;
    //   for (let j = i + 1; j < arr.length; j++) {
    //     if (arr[j] < min) {
    //       min = arr[j];
    //       minIndex = j;
    //     }
    //   }
    // const temp = arr[i];
    // arr[i] = min;
    // arr[minIndex] = temp;

    for (let i = 0; i < arr.length - 1; i++) {
      timers.current.push(
        setTimeout(() => {
          let min = arr[i];
          let minIndex = i;
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].height < min.height) {
              min = arr[j];
              minIndex = j;
            }
            setHighlightedIndex(minIndex);
            // setBarsToRender((prev) => {
            //   const updatedBars = swapBarsImmutable(prev, i, minIndex);
            //   return updatedBars;
            // });
          }
        }, 500 * i)
      );
      // if (i === arr.length - 2) {
      //   setIsPlaying(false);
      // }
    }
    // return arr;
  };

  const insertionSort = () => {
    console.log("insertion");
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
