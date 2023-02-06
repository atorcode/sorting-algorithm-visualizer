import styles from "./Algorithm.module.scss";
import { useParams } from "react-router-dom";
import AlgorithmDetails from "../../components/AlgorithmDetails";
import VisualizerHero from "../../components/VisualizerHero";
import { unformatLink } from "../../utils/utils";
import algorithms from "../../data/algorithms";

const Algorithm = () => {
  const { algorithmType } = useParams();

  console.log(unformatLink(algorithmType));

  return (
    <>
      <VisualizerHero />
      <AlgorithmDetails />
    </>
  );
};

export default Algorithm;
