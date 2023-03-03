import { calcAnimationStepTime } from "../utils/utils";
import { swapBarsMutable } from "../utils/swaps";

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
        });
        animations.push({
          action: "color",
          arr: [...copy],
          highlightedIndices: [j],
          delay: delay,
        });
      }
    }
  }
  return animations;
};

export default bubbleSort;
