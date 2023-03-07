import { calcAnimationStepTime, checkIfSorted } from "../utils/utils";

const merge = (arr, left, mid, right, animations) => {
  let i = left;
  let j = mid + 1;
  let k = 0;
  const delay = calcAnimationStepTime(arr.length, 5000);
  const working = arr.slice(left, mid + 1);
  while (k < working.length && j <= right) {
    if (working[k].correctPos <= arr[j].correctPos) {
      arr[i] = working[k];
      animations.push({
        action: "color",
        arr: [...arr],
        highlightedIndices: [i],
        delay: delay,
      });
      animations.push({
        action: "move",
        arr: [...arr],
        swap1: i,
        swap2: k,
        swapArr: [...working],
      });
      i++;
      k++;
    } else {
      arr[i] = arr[j];
      animations.push({
        action: "color",
        arr: [...arr],
        highlightedIndices: [i],
        delay: delay,
      });
      animations.push({
        action: "move",
        arr: [...arr],
        swap1: i,
        swap2: j,
        swapArr: [...arr],
      });
      i++;
      j++;
    }
  }
  while (k < working.length) {
    arr[i] = working[k];
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [i],
      delay: delay,
    });
    animations.push({
      action: "move",
      arr: [...arr],
      swap1: i,
      swap2: k,
      swapArr: [...working],
    });
    i++;
    k++;
  }
  while (j <= right) {
    arr[i] = arr[j];
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [i],
      delay: delay,
    });
    animations.push({
      action: "move",
      arr: [...arr],
      swap1: i,
      swap2: j,
      swapArr: [...arr],
    });
    i++;
    j++;
  }
  return arr;
};

const mergeSort = (arr, left, right, animations) => {
  if (right <= left) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid, animations);
  mergeSort(arr, mid + 1, right, animations);
  return merge(arr, left, mid, right, animations);
};

const getMergeSortAnimations = (arr) => {
  const animations = [];
  if (checkIfSorted(arr)) {
    return animations;
  }
  const copy = [...arr];
  mergeSort(copy, 0, copy.length - 1, animations);
  return animations;
};

export default getMergeSortAnimations;
