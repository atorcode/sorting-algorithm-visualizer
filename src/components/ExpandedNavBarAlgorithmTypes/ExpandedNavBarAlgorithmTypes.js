import ExpandedNavBarAlgorithmType from "../ExpandedNavBarAlgorithmType";
import algorithms from "../../data/algorithms.json";

const ExpandedNavBarAlgorithmTypes = () => {
  return (
    <ul>
      {algorithms.map((algorithm) => {
        return (
          <ExpandedNavBarAlgorithmType
            key={algorithm.id}
            name={algorithm.name}
          />
        );
      })}
    </ul>
  );
};

export default ExpandedNavBarAlgorithmTypes;
