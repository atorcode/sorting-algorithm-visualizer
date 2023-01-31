import styles from "./AlgorithmDetails.module.scss";
import AlgorithmDescription from "../AlgorithmDescription";
import AlgorithmComplexityTable from "../AlgorithmComplexityTable";
import AlgorithmImplementation from "../AlgorithmImplementation";

const AlgorithmDetails = () => {
  return (
    <section className={styles["details-section"]}>
      <AlgorithmDescription />
      <AlgorithmComplexityTable />
      <AlgorithmImplementation />
    </section>
  );
};

export default AlgorithmDetails;
