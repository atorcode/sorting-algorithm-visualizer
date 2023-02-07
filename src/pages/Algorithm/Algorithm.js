import styles from "./Algorithm.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlgorithmDetails from "../../components/AlgorithmDetails";
import VisualizerHero from "../../components/VisualizerHero";
import { unformatLink } from "../../utils/utils";
import algorithms from "../../data/algorithms.json";

const Algorithm = () => {
  const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let temp = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = temp;
    }
    return arr;
  };

  console.log(insertionSort([5, 3, 1, 4, 2]));

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
