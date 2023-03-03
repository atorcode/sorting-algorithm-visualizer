import { calcAnimationStepTime, checkIfSorted } from "../utils/utils";
// import { swapBarsMutable } from "../utils/swaps";

// helper function for mergeSort
const merge = (arr, aux, left, right, animations) => {
  let i = left;
  let j = right;
  let k = left;

  // const delay = calcAnimationStepTime(arr.length, 5000);
  const delay = 100;
  while (i <= left && j <= right) {
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [i, j],
      delay: delay,
    });
    if (aux[i].correctPos <= aux[j].correctPos) {
      arr[k] = aux[i];
      i++;
    } else {
      arr[k] = aux[j];
      j++;
    }
    k++;
  }

  while (i <= left) {
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [i],
      delay: delay,
    });
    arr[k] = aux[i];
    i++;
    k++;
  }

  while (j <= right) {
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [j],
      delay: delay,
    });
    arr[k] = aux[j];
    j++;
    k++;
  }
};

const mergeSort = (arr, aux, left, right, animations) => {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  mergeSort(arr, aux, left, mid, animations);
  mergeSort(arr, aux, mid + 1, right, animations);
  return merge(arr, aux, left, right, animations);
};

const getMergeSortAnimations = (arr) => {
  const animations = [];
  if (checkIfSorted(arr)) {
    return animations;
  }
  const copy = [...arr];
  const aux = [...arr];
  mergeSort(copy, aux, 0, copy.length - 1, animations);
  return animations;
};

export default getMergeSortAnimations;
