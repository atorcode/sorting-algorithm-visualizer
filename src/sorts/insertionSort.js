import { calcAnimationStepTime } from "../utils/utils";
import { swapBarsMutable } from "../utils/swaps";

const insertionSort = (arr) => {
  const animations = [];
  const copy = [...arr];
  const delay = calcAnimationStepTime(arr.length, 3000);
  for (let i = 1; i < copy.length; i++) {
    let j = i;
    while (j > 0 && copy[j - 1].correctPos > copy[j].correctPos) {
      swapBarsMutable(copy, j - 1, j);
      animations.push({
        action: "move",
        arr: [...copy],
        swap1: j - 1,
        swap2: j,
      });
      animations.push({
        action: "color",
        arr: [...copy],
        highlightedIndices: [j],
        delay: delay,
      });
      j = j - 1;
    }
  }
  return animations;
};

export default insertionSort;
