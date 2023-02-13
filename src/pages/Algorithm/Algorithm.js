import styles from "./Algorithm.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlgorithmDetails from "../../components/AlgorithmDetails";
import VisualizerHero from "../../components/VisualizerHero";
import { unformatLink } from "../../utils/utils";
import algorithms from "../../data/algorithms.json";

const Algorithm = () => {
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  const partition = (arr, left, right) => {
    const pivot = arr[Math.floor(Math.random() * (right - left) + left)];

    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
      while (arr[right] > pivot) {
        right--;
      }

      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
    }
    return left;
  };

  const quickSort = (arr, left, right) => {
    if (left === undefined) {
      left = 0;
      right = arr.length - 1;
    }
    if (left >= right) {
      return arr;
    }

    const pIndex = partition(arr, left, right);
    quickSort(arr, left, pIndex - 1);
    quickSort(arr, pIndex, right);
    return arr;
  };

  console.log(quickSort([9, 7, 5, 3, 1, 8, 6, 4, 2]));

  const [algorithm, setAlgorithm] = useState(null);
  const { algorithmType } = useParams();

  useEffect(() => {
    setAlgorithm(
      algorithms.filter((algorithm) => {
        return algorithm.name === unformatLink(algorithmType);
      })[0]
    );
  }, [algorithmType]);

  return (
    <>
      <VisualizerHero {...algorithm} />
      <AlgorithmDetails {...algorithm} />
    </>
  );
};

export default Algorithm;
