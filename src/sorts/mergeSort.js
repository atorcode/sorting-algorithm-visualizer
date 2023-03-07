import { calcAnimationStepTime, checkIfSorted } from "../utils/utils";
import { swapBarsMutable } from "../utils/swaps";

// helper function for mergeSort
// const merge = (arr, aux, left, mid, right, animations) => {
//   let i = left;
//   let j = mid + 1;
//   let k = left;

//   // const delay = calcAnimationStepTime(arr.length, 5000);
//   const delay = 100;
//   while (i <= mid && j <= right) {
//     if (aux[i].correctPos <= aux[j].correctPos) {
//       animations.push({
//         action: "color",
//         arr: [...arr],
//         highlightedIndices: [k],
//         delay: delay,
//       });
//       arr[k] = aux[i];
//       animations.push({
//         action: "move",
//         arr: [...arr],
//         swap1: k,
//         swap2: i,
//         swapArr: [...aux],
//       });
//       i++;
//     } else {
//       animations.push({
//         action: "color",
//         arr: [...arr],
//         highlightedIndices: [k],
//         delay: delay,
//       });
//       arr[k] = aux[j];
//       animations.push({
//         action: "move",
//         arr: [...arr],
//         swap1: k,
//         swap2: j,
//         swapArr: [...aux],
//       });
//       j++;
//     }
//     k++;
//   }
//   while (i <= mid) {
//     animations.push({
//       action: "color",
//       arr: [...arr],
//       highlightedIndices: [k],
//       delay: delay,
//     });
//     arr[k] = aux[i];
//     animations.push({
//       action: "move",
//       arr: [...arr],
//       swap1: k,
//       swap2: i,
//       swapArr: [...aux],
//     });
//     i++;
//     k++;
//   }
//   while (j <= right) {
//     animations.push({
//       action: "color",
//       arr: [...arr],
//       highlightedIndices: [k],
//       delay: delay,
//     });
//     arr[k] = aux[j];
//     animations.push({
//       action: "move",
//       arr: [...arr],
//       swap1: k,
//       swap2: j,
//       swapArr: [...aux],
//     });
//     j++;
//     k++;
//   }
// };

// const mergeSort = (arr, aux, left, right, animations) => {
//   if (left >= right) {
//     return;
//   }
//   const mid = Math.floor((left + right) / 2);
//   mergeSort(aux, arr, left, mid, animations);
//   mergeSort(aux, arr, mid + 1, right, animations);
//   return merge(arr, aux, left, mid, right, animations);
// };

// const getMergeSortAnimations = (arr) => {
//   const animations = [];
//   if (checkIfSorted(arr)) {
//     return animations;
//   }
//   const copy = [...arr];
//   const aux = [...arr];
//   mergeSort(copy, aux, 0, copy.length - 1, animations);
//   return animations;
// };

// const merge = (arr, left, right, mid) => {
//   let i = left;
//   let j = mid + 1;
//   let k = 0;
//   const working = arr.slice(i, mid + 1);
//   while (k < working.length && j <= right) {
//     if (working[k] <= arr[j]) {
//       arr[i] = arr[j];
//       i++;
//       j++;
//     } else {
//       arr[i] = working[k];
//       i++;
//       k++;
//     }
//   }
//   while (k <= working.length) {
//     arr[i] = working[k];
//     i++;
//     k++;
//   }
//   while (j <= right) {
//     arr[i] = arr[j];
//     i++;
//     j++;
//   }
//   return arr;
// };

// const mergeSort = (arr, left, right) => {
//   const mid = Math.floor((left + right) / 2);
//   mergeSort(arr, left, mid);
//   mergeSort(arr, mid + 1, right);
//   merge(arr, left, mid, right);
// };

const merge = (arr, left, mid, right, animations) => {
  let i = left;
  let j = mid + 1;
  let k = 0;
  const delay = 100;
  const working = arr.slice(left, mid + 1);
  while (k < working.length && j <= right) {
    if (working[k].correctPos <= arr[j].correctPos) {
      animations.push({
        action: "color",
        arr: [...arr],
        highlightedIndices: [k],
        delay: delay,
      });
      animations.push({
        action: "move",
        arr: [...arr],
        swap1: i,
        swap2: k,
        swapArr: [...working],
      });
      arr[i] = working[k];
      i++;
      k++;
    } else {
      animations.push({
        action: "color",
        arr: [...arr],
        highlightedIndices: [k],
        delay: delay,
      });
      animations.push({
        action: "move",
        arr: [...arr],
        swap1: i,
        swap2: j,
        swapArr: [...arr],
      });
      arr[i] = arr[j];
      i++;
      j++;
    }
  }
  while (k < working.length) {
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [k],
      delay: delay,
    });
    animations.push({
      action: "move",
      arr: [...arr],
      swap1: i,
      swap2: k,
      swapArr: [...working],
    });
    arr[i] = working[k];
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
    animations.push({
      action: "move",
      arr: [...arr],
      swap1: i,
      swap2: j,
      swapArr: [...arr],
    });
    arr[i] = arr[j];
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
