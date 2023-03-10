import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AlgorithmDetails from "../../components/AlgorithmDetails";
import VisualizerHero from "../../components/VisualizerHero";
import { unformatLink } from "../../utils/utils";
import algorithms from "../../data/algorithms.json";

const Algorithm = () => {
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
