import { calcAnimationStepTime, checkIfSorted } from "../utils/utils";

const mergeInPlace = (arr, start, mid, end, animations) => {
  const delay = 100;
  let start2 = mid + 1;
  // The array is already sorted because both subarrays are sorted and the right subarray contains only elements which are greater than or equal to the largest element in the left subarray
  if (arr[mid].correctPos <= arr[start2].correctPos) {
    return;
  }
  while (start <= mid && start2 <= end) {
    animations.push({
      action: "color",
      arr: [...arr],
      highlightedIndices: [start],
      delay: delay,
    });
    if (arr[start] <= arr[start2]) {
      start++;
    } else {
      const valueToInsert = arr[start2];
      let idx = start2;
      // shift all elements between the elements at the two start pointers to make room for insertion
      while (idx !== start) {
        animations.push({
          action: "color",
          arr: [...arr],
          highlightedIndices: [idx],
          delay: delay,
        });
        animations.push({
          action: "insert",
          arr: [...arr],
          insertFrom: idx,
          insertTo: start,
        });
        arr[idx] = arr[idx - 1];
        idx--;
      }
      arr[start] = valueToInsert;
      // increment all pointers to account for insertion and move on to next step
      start++;
      mid++;
      start2++;
    }
  }
  return arr;
};

const mergeSortInPlace = (arr, left, right, animations) => {
  if (right <= left) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  mergeSortInPlace(arr, left, mid, animations);
  mergeSortInPlace(arr, mid + 1, right, animations);
  return mergeInPlace(arr, left, mid, right, animations);
};

const getMergeSortInPlaceAnimations = (arr) => {
  const animations = [];
  if (checkIfSorted(arr)) {
    return animations;
  }
  const copy = [...arr];
  mergeSortInPlace(copy, 0, copy.length - 1, animations);
  return animations;
};

export default getMergeSortInPlaceAnimations;
