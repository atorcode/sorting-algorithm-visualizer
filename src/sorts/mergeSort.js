import { calcAnimationStepTime, checkIfSorted } from "../utils/utils";

// import { swapBarsMutable } from "../utils/swaps";

// helper function for mergeSort
const merge = (arr, aux, left, mid, right, animations) => {
  let i = left;
  let j = mid + 1;
  let k = left;

  // const delay = calcAnimationStepTime(arr.length, 5000);
  const delay = 100;
  while (i <= mid && j <= right) {
    animations.push({
      action: "color",
      arr: [...arr],
      // highlightedIndices: [i, j],
      highlightedIndices: [k],

      delay: delay,
    });
    if (aux[i].correctPos <= aux[j].correctPos) {
      // arr[k] = aux[i];
      animations.push({
        action: "update",
        arr: [...arr],
        index: k,
        updatedPos: aux[i].left,
      });
      arr[k] = aux[i];
      // animations.push({
      //   action: "move",
      //   arr: [...arr],
      //   swap1: k,
      //   swap2: i,
      //   swapArr: aux,
      // });
      i++;
    } else {
      arr[k] = aux[j];
      animations.push({
        action: "update",
        arr: [...arr],
        index: k,
        updatedPos: aux[j].left,
      });
      arr[k] = aux[j];
      // animations.push({
      //   action: "move",
      //   arr: [...arr],
      //   swap1: k,
      //   swap2: i,
      //   swapArr: aux,
      // });
      j++;
    }
    k++;
  }
  while (i <= mid) {
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [k],
      delay: delay,
    });
    // arr[k] = aux[i];
    animations.push({
      action: "update",
      arr: [...arr],
      index: k,
      updatedPos: aux[i].left,
    });
    arr[k] = aux[i];
    // animations.push({
    //   action: "move",
    //   arr: [...arr],
    //   swap1: k,
    //   swap2: i,
    //   swapArr: aux,
    // });
    i++;
    k++;
  }
  while (j <= right) {
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [k],
      delay: delay,
    });
    // arr[k] = aux[j];
    animations.push({
      action: "update",
      arr: [...arr],
      index: k,
      updatedPos: aux[j].left,
    });
    arr[k] = aux[j];
    // animations.push({
    //   action: "move",
    //   arr: [...arr],
    //   swap1: k,
    //   swap2: j,
    //   swapArr: aux,
    // });
    j++;
    k++;
  }
};

const mergeSort = (arr, aux, left, right, animations) => {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  mergeSort(aux, arr, left, mid, animations);
  mergeSort(aux, arr, mid + 1, right, animations);
  return merge(arr, aux, left, mid, right, animations);
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
