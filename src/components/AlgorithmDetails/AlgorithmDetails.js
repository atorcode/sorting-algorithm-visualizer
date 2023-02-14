import styles from "./AlgorithmDetails.module.scss";
import AlgorithmDescription from "../AlgorithmDescription";
import AlgorithmComplexityTable from "../AlgorithmComplexityTable";
import AlgorithmImplementation from "../AlgorithmImplementation";

const AlgorithmDetails = (algorithm) => {
  const { description, complexity, implementation } = algorithm;

  return (
    <section className={styles["details-section"]}>
      <AlgorithmDescription description={description} />
      <AlgorithmComplexityTable complexity={complexity} />
      <AlgorithmImplementation implementation={implementation} />
    </section>
  );
};

export default AlgorithmDetails;
