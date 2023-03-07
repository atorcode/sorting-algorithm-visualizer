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
  copyLeft,
} from "../../utils/utils";
import { swapLefts, swapBarsImmutable } from "../../utils/swaps";
import insertionSort from "../../sorts/insertionSort";
import selectionSort from "../../sorts/selectionSort";
import bubbleSort from "../../sorts/bubbleSort";
import getQuickSortAnimations from "../../sorts/quickSort";
import getMergeSortAnimations from "../../sorts/mergeSort";
import getMergeSortInPlaceAnimations from "../../sorts/mergeSortInPlace";

const VisualizerControls = ({ name, barsToRender, setBarsToRender }) => {
  const [numBars, setNumBars] = useState(100);

  const { isPlaying, setIsPlaying, barsContainer, highlightedIndex, timers } =
    useAnimationContext();

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
      bars.push({
        correctPos: i,
        height: height,
        width: width,
        left: left,
      });
    }
    return initBars(bars);
  };

  // Async shuffle
  // This function has not been refactored to use the animation queue system and animateArrayUpdate because using async/await makes this animation too slow when the bar count is high. This implementation guarantees that the animation is finished playing after roughly three seconds. It is okay that not every step in the animation gets separately rendered.
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

  // The way this function is implemented forces there to be coloring animations in between swap animations, otherwise the visualization will not be staggered and will not appear asynchronous. For the purposes of this program, that's not an issue.
  const animateArrayUpdate = async (animations) => {
    const bars = barsContainer.current.children;
    for (let i = 0; i < animations.length; i++) {
      const anim = animations[i];
      if (anim.action === "color") {
        const highlightedBar = bars[anim.highlightedIndices[0]];
        const highlightedBarTwo = bars[anim.highlightedIndices[1]];
        const highlightedBarThree = bars[anim.highlightedIndices[2]];

        highlightedBar.classList.add(barStyles["bar-highlighted"]);

        if (highlightedBarTwo) {
          highlightedBarTwo.classList.add(barStyles["bar-highlighted-two"]);
        }
        if (highlightedBarThree) {
          highlightedBarThree.classList.add(barStyles["bar-highlighted-three"]);
        }

        await new Promise((resolve) => {
          timers.current.push(setTimeout(resolve, anim.delay));
        });
        highlightedBar.classList.remove(barStyles["bar-highlighted"]);

        if (highlightedBarTwo) {
          highlightedBarTwo.classList.remove(barStyles["bar-highlighted-two"]);
        }
        if (highlightedBarThree) {
          highlightedBarThree.classList.remove(
            barStyles["bar-highlighted-three"]
          );
        }
      }

      // in-place merge sort
      if (anim.action === "insert") {
        setBarsToRender(anim.arr);
      }
      // move animations are broken for merge sort
      if (anim.action === "move") {
        if (anim.swapArr) {
          // find duplicate
          // const duplicateIndex = anim.arr.indexOf(
          //   anim.arr[anim.swap1],
          //   anim.arr.indexOf(anim.arr[anim.swap1]) + 1
          // );
          // anim.arr[duplicateIndex]

          setBarsToRender(
            anim.arr.map((bar, i) => {
              return {
                ...bar,
                left: calcLeftPosPercentage(anim.arr.length, i + 1),
              };
            })
          );
        } else {
          setBarsToRender(swapLefts(anim.arr, anim.swap1, anim.swap2));
        }
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
        bars[i].classList.remove(barStyles["bar-highlighted-two"]);
        bars[i].classList.remove(barStyles["bar-highlighted-three"]);
      }
    }
  }, [isPlaying]);

  let algorithmToPlay;
  switch (name) {
    case "quick sort":
      algorithmToPlay = () => {
        animateArrayUpdate(getQuickSortAnimations(barsToRender));
      };
      break;
    case "merge sort":
      algorithmToPlay = () => {
        animateArrayUpdate(getMergeSortAnimations(barsToRender));
      };
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
