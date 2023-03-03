import { calcAnimationStepTime, checkIfSorted } from "../utils/utils";
import { swapBarsMutable } from "../utils/swaps";

// helper function for quickSort
const partition = (arr, left, right, animations) => {
  const pivotIdx = Math.floor(Math.random() * (right - left) + left);
  const pivot = arr[pivotIdx];
  const delay = calcAnimationStepTime(arr.length, 5000);
  while (left <= right) {
    while (arr[left].correctPos < pivot.correctPos) {
      left++;
    }
    while (arr[right].correctPos > pivot.correctPos) {
      right--;
    }
    if (left <= right) {
      animations.push({
        action: "color",
        arr: [...arr],
        highlightedIndices: [pivotIdx, left, right],
        delay: delay,
      });
      swapBarsMutable(arr, left, right);
      animations.push({
        action: "move",
        arr: [...arr],
        swap1: left,
        swap2: right,
      });
      left++;
      right--;
    }
  }
  return left;
};

const quickSort = (arr, left, right, animations) => {
  if (left === undefined) {
    left = 0;
    right = arr.length - 1;
  }
  if (left >= right) {
    return arr;
  }
  const pIndex = partition(arr, left, right, animations);
  quickSort(arr, left, pIndex - 1, animations);
  quickSort(arr, pIndex, right, animations);
  return arr;
};

// quickSort needs to return an array for recursive calls to work properly, so this function's purpose is to store the animations.
const getQuickSortAnimations = (arr) => {
  const animations = [];
  if (checkIfSorted(arr)) {
    return animations;
  }
  const copy = [...arr];
  quickSort(copy, 0, copy.length - 1, animations);
  return animations;
};

export default getQuickSortAnimations;
