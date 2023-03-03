import { calcAnimationStepTime, checkIfSorted } from "../utils/utils";
// import { swapBarsMutable } from "../utils/swaps";

// helper function for mergeSort
const merge = (arr, left, right, wholeArr, animations) => {
  let i = 0;
  let j = 0;
  let k = 0;

  // const delay = calcAnimationStepTime(arr.length, 5000);
  const delay = 100;
  while (i < left.length && j < right.length) {
    if (left[i].correctPos <= right[j].correctPos) {
      animations.push({
        action: "color",
        arr: [...arr],
        highlightedIndices: [i],
        delay: delay,
      });
      arr[k] = left[i];
      animations.push({
        action: "move",
        arr: [...arr],
        swap1: k,
        swap2: i,
        swapArr: left,
      });
      i++;
    } else {
      animations.push({
        action: "color",
        arr: [...arr],
        highlightedIndices: [j],
        delay: delay,
      });
      arr[k] = right[j];
      animations.push({
        action: "move",
        arr: [...arr],
        swap1: k,
        swap2: j,
        swapArr: right,
      });
      j++;
    }
    k++;
  }
  while (i < left.length) {
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [k],
      delay: delay,
    });
    arr[k] = left[i];
    animations.push({
      action: "move",
      arr: [...arr],
      swap1: k,
      swap2: i,
      swapArr: left,
    });
    i++;
    k++;
  }
  while (j < right.length) {
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [k],
      delay: delay,
    });
    arr[k] = right[j];
    animations.push({
      action: "move",
      arr: [...arr],
      swap1: k,
      swap2: j,
      swapArr: right,
    });
    j++;
    k++;
  }
  return arr;
};

const mergeSort = (segment, wholeArr, animations) => {
  if (segment.length < 2) {
    return;
  }
  const left = segment.slice(0, segment.length / 2);
  const right = segment.slice(segment.length / 2);
  mergeSort(left, wholeArr, animations);
  mergeSort(right, wholeArr, animations);
  return merge(segment, left, right, wholeArr, animations);
};

const getMergeSortAnimations = (arr) => {
  const animations = [];
  if (checkIfSorted(arr)) {
    return animations;
  }
  const copy = [...arr];
  mergeSort(copy, copy, animations);
  return animations;
};

export default getMergeSortAnimations;
