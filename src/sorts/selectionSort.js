import { calcAnimationStepTime, checkIfSorted } from "../utils/utils";
import { swapBarsMutable } from "../utils/swaps";

const selectionSort = (arr) => {
  const animations = [];
  if (checkIfSorted(arr)) {
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
      highlightedIndices: [minIdx],
      delay: delay,
    });
    swapBarsMutable(copy, i, minIdx);
    animations.push({
      action: "move",
      arr: [...copy],
      swap1: i,
      swap2: minIdx,

      unhighlight: true,
    });
  }
  return animations;
};

export default selectionSort;
