import styles from "./AlgorithmDetails.module.scss";
import ComplexityTable from "../ComplexityTable";
import AlgorithmDescription from "../AlgorithmDescription";
import AlgorithmImplementation from "../AlgorithmImplementation";

const AlgorithmDetails = () => {
  return (
    <section className={styles["details-section"]}>
      <AlgorithmDescription />
      <ComplexityTable />
      <AlgorithmImplementation />
    </section>
  );
};

export default AlgorithmDetails;
