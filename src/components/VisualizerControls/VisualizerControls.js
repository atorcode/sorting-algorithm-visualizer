import styles from "./VisualizerControls.module.scss";
import barStyles from "../VisualizerBar/VisualizerBar.module.scss";
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

  const { isPlaying, setIsPlaying, barsContainer, highlightedIndex, timers } =
    useAnimationContext();

  // Modifies original array
  const swapBarsMutable = (bars, idx, idx2) => {
    const temp = bars[idx];
    bars[idx] = bars[idx2];
    bars[idx2] = temp;

    return bars;
  };

  const swapLefts = (bars, idx, idx2) => {
    const tempLeft = bars[idx].left;
    bars[idx].left = bars[idx2].left;
    bars[idx2].left = tempLeft;

    return bars;
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
    // for debugging
    // return [
    //   { correctPos: 2, height: 30, width: 10, left: 0 },
    //   { correctPos: 1, height: 20, width: 10, left: 10 },
    //   { correctPos: 3, height: 40, width: 10, left: 20 },
    //   { correctPos: 4, height: 50, width: 10, left: 30 },
    //   { correctPos: 5, height: 60, width: 10, left: 40 },
    //   { correctPos: 6, height: 70, width: 10, left: 50 },
    //   { correctPos: 7, height: 80, width: 10, left: 60 },
    //   { correctPos: 8, height: 90, width: 10, left: 70 },
    //   { correctPos: 9, height: 100, width: 10, left: 80 },
    // ];
    return initBars(bars);
  };

  // Async shuffle
  // This function has not been refactored to use the animation queue system and animateArrayUpdate because using async/await makes this animation too slow when the bar count is high. This implementation guarantees that the animation is finished playing after roughly three seconds. It is okay that not ever step in the animation gets separately rendered.
  const shuffleBars = (bars) => {
    setIsPlaying(true);
    for (let currentIndex = bars.length - 1; currentIndex > 0; currentIndex--) {
      timers.current.push(
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * currentIndex);
          // this function still uses the old highlighting system
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

  const bubbleSort = (arr) => {
    const animations = [];
    const copy = [...arr];
    const delay = calcAnimationStepTime(arr.length, 3000);
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      for (let j = 0; j < copy.length - 1; j++) {
        if (copy[j].correctPos > copy[j + 1].correctPos) {
          isSorted = false;
          swapBarsMutable(copy, j, j + 1);
          animations.push({
            action: "move",
            arr: [...copy],
            swap1: j,
            swap2: j + 1,
            delay: delay,
          });
          animations.push({
            action: "color",
            arr: [...copy],
            highlightedIndex: j,
            delay: delay,
          });
        }
      }
    }
    return animations;
  };

  const selectionSort = (arr) => {
    const animations = [];
    let isAlreadySorted = true;
    for (let x = 0; x < arr.length - 1; x++) {
      if (arr[x].correctPos > arr[x + 1].correctPos) {
        isAlreadySorted = false;
        break;
      }
    }
    if (isAlreadySorted) {
      return animations;
    }
    const copy = [...arr];
    const delay = calcAnimationStepTime(arr.length, 7500);
    for (let i = 0; i < copy.length - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < copy.length; j++) {
        if (copy[j].correctPos < copy[minIdx].correctPos) {
          minIdx = j;
        }
      }
      animations.push({
        action: "color",
        arr: [...copy],
        highlightedIndex: minIdx,
        delay: delay,
      });
      swapBarsMutable(copy, i, minIdx);
      animations.push({
        action: "move",
        arr: [...copy],
        swap1: i,
        swap2: minIdx,
        delay: delay,
        unhighlight: true,
      });
    }
    return animations;
  };

  const insertionSort = (arr) => {
    const animations = [];
    const copy = [...arr];
    const delay = calcAnimationStepTime(arr.length, 5000);
    for (let i = 1; i < copy.length; i++) {
      let j = i;
      while (j > 0 && copy[j - 1].correctPos > copy[j].correctPos) {
        swapBarsMutable(copy, j - 1, j);
        animations.push({
          action: "move",
          arr: [...copy],
          swap1: j - 1,
          swap2: j,
          delay: delay,
        });
        animations.push({
          action: "color",
          arr: [...copy],
          highlightedIndex: j,
          delay: delay,
        });
        j = j - 1;
      }
    }
    return animations;
  };

  const animateArrayUpdate = async (animations) => {
    const bars = barsContainer.current.children;
    for (let i = 0; i < animations.length; i++) {
      const anim = animations[i];
      if (anim.action === "color") {
        let highlightedBar = bars[anim.highlightedIndex];
        highlightedBar.classList.add(barStyles["bar-highlighted"]);
        await new Promise((resolve) => {
          timers.current.push(setTimeout(resolve, anim.delay));
        });
        highlightedBar.classList.remove(barStyles["bar-highlighted"]);
      }
      if (anim.action === "move") {
        setBarsToRender(swapLefts(anim.arr, anim.swap1, anim.swap2));
      }

      if (anim.unhighlight) {
        await new Promise((resolve) => {
          timers.current.push(setTimeout(resolve, 0));
        });
      }
    }
    // await prevents batching of setIsPlaying(false). This is notably important when we have an already sorted array.
    await new Promise((resolve) => {
      timers.current.push(setTimeout(resolve, 250));
    });
    setIsPlaying(false);
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
      algorithmToPlay = () => {
        animateArrayUpdate(bubbleSort(barsToRender));
      };
      break;
    case "selection sort":
      algorithmToPlay = () => {
        animateArrayUpdate(selectionSort(barsToRender));
      };
      break;
    case "insertion sort":
      algorithmToPlay = () => {
        animateArrayUpdate(insertionSort(barsToRender));
      };
      break;
  }

  useEffect(() => {
    // setBarsToRender(createBarArray(numBars));
    createBarArray(numBars);
  }, [numBars]);

  useEffect(() => {
    if (!isPlaying) {
      highlightedIndex.current = null;
      const bars = barsContainer.current.children;
      for (let i = 0; i < bars.length; i++) {
        bars[i].classList.remove(barStyles["bar-highlighted"]);
      }
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
