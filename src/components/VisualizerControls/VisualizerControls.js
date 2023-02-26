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
    return [
      { correctPos: 2, height: 30, width: 10, left: 0 },
      { correctPos: 1, height: 20, width: 10, left: 10 },
      { correctPos: 3, height: 40, width: 10, left: 20 },
      { correctPos: 4, height: 50, width: 10, left: 30 },
      { correctPos: 5, height: 60, width: 10, left: 40 },
      { correctPos: 6, height: 70, width: 10, left: 50 },
      { correctPos: 7, height: 80, width: 10, left: 60 },
      { correctPos: 8, height: 90, width: 10, left: 70 },
      { correctPos: 9, height: 100, width: 10, left: 80 },
    ];
    return initBars(bars);
  };

  // Async shuffle
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

  const bubbleSort = async () => {
    let isSorted = false;
    while (!isSorted) {
      isSorted = true;
      for (let j = 0; j < barsToRender.length - 1; j++) {
        await new Promise((resolve) =>
          timers.current.push(setTimeout(resolve, 5))
        );
        highlightedIndex.current = j + 1;
        setBarsToRender((prev) => {
          if (prev[j].correctPos > prev[j + 1].correctPos) {
            isSorted = false;
            return swapBarsImmutable(prev, j, j + 1);
          }
          return prev;
        });
      }
      if (isSorted) {
        setIsPlaying(false);
      }
    }
  };

  // const selectionSort = async () => {
  //   for (let i = 0; i < barsToRender.length; i++) {
  //     if (i === barsToRender.length - 1) {
  //       setIsPlaying(false);
  //       return;
  //     }
  //     await new Promise((resolve) =>
  //       timers.current.push(setTimeout(resolve, 1000))
  //     );
  //     setBarsToRender((prev) => {
  //       let minIdx = i;

  //       for (let j = i + 1; j < prev.length; j++) {
  //         if (prev[j].correctPos < prev[minIdx].correctPos) {
  //           minIdx = j;
  //         }
  //       }
  //       highlightedIndex.current = minIdx;

  //       return swapBarsImmutable(prev, i, minIdx);
  //     });
  //   }
  // };

  const selectionSort = (arr) => {
    const animations = [];
    const copy = [...arr];
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
        idx1: i,
        idx2: minIdx,
      });
      swapBarsMutable(copy, i, minIdx);
      animations.push({
        action: "move",
        arr: [...copy],
        idx1: i,
        idx2: minIdx,
      });
    }
    return animations;
  };

  const animateArrayUpdate = async (animations) => {
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      const anim = animations[i];
      const bars = barsContainer.current.children;
      // console.log(anim, swapLefts(anim.arr, anim.idx1, anim.idx2));
      const selectionSort = (arr) => {
        const animations = [];
        const copy = [...arr];
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
            idx1: i,
            idx2: minIdx,
          });
          swapBarsMutable(copy, i, minIdx);
          animations.push({
            action: "move",
            arr: [...copy],
            idx1: i,
            idx2: minIdx,
          });
        }
        return animations;
      };

      const animateArrayUpdate = async (animations) => {
        for (let i = 0; i < animations.length; i++) {
          const anim = animations[i];
          const bars = barsContainer.current.children;
          console.log(anim.idx2);
          // console.log(anim, swapLefts(anim.arr, anim.idx1, anim.idx2));
          if (anim.action === "color") {
            bars[anim.idx2].classList.add(barStyles["bar-highlighted"]);
            await new Promise((resolve) => {
              timers.current.push(setTimeout(resolve, 1000));
            });
          }
          bars[anim.idx2].classList.remove(barStyles["bar-highlighted"]);

          if (anim.action === "move") {
            setBarsToRender(swapLefts(anim.arr, anim.idx1, anim.idx2));
          }
        }
        setIsPlaying(false);
      };
      if (anim.action === "color") {
        bars[anim.idx2].classList.add(barStyles["bar-highlighted"]);
        await new Promise((resolve) => {
          timers.current.push(setTimeout(resolve, 1000));
        });
      }
      bars[anim.idx2].classList.remove(barStyles["bar-highlighted"]);

      if (anim.action === "move") {
        setBarsToRender(swapLefts(anim.arr, anim.idx1, anim.idx2));
      }
    }
    setIsPlaying(false);
  };

  // animateArrayUpdate(selectionSort(barsToRender));

  // console.log(
  //   selectionSort([
  //     { correctPos: 0 },
  //     { correctPos: 2 },
  //     { correctPos: 1 },
  //     { correctPos: 9 },
  //     { correctPos: 5 },
  //     { correctPos: 3 },
  //     { correctPos: 7 },
  //     { correctPos: 6 },
  //     { correctPos: 4 },
  //   ])
  // );

  // useEffect(() => {
  //   const bars = barsContainer.current.children;
  //   console.log(bars);

  //   for (let i = 0; i < bars.length; i++) {
  //     bars[i].classList.add(barStyles["bar-highlighted"]);
  //   }
  // });

  const insertionSort = async () => {
    // for (let i = 1; i < barsToRender.length; i++) {
    //   if (i === barsToRender.length - 1) {
    //     setIsPlaying(false);
    //     return;
    //   }
    //   await new Promise((resolve) =>
    //     timers.current.push(setTimeout(resolve, 500))
    //   );
    //   let j = i;
    //   while (
    //     j > 0 &&
    //     barsToRender[j - 1].correctPos > barsToRender[j].correctPos
    //   ) {
    //     setBarsToRender((prev) => {
    //       const updatedBars = swapBarsImmutable(prev, j - 1, j);
    //       j = j - 1;
    //       return updatedBars;
    //     });
    //     await new Promise((resolve) =>
    //       timers.current.push(setTimeout(resolve, 500))
    //     );
    //   }
    // }
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
      algorithmToPlay = () => {
        animateArrayUpdate(selectionSort(barsToRender));
      };
      break;
    case "insertion sort":
      algorithmToPlay = insertionSort;
      break;
  }

  useEffect(() => {
    console.log(createBarArray(numBars));
    setBarsToRender(createBarArray(numBars));
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
