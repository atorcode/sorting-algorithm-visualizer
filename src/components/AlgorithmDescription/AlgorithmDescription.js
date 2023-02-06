import styles from "./AlgorithmDescription.module.scss";

const AlgorithmDescription = ({ description }) => {
  return (
    <section className={styles["description-section"]}>
      <h2>DESCRIPTION</h2>
      <p>{description}</p>
    </section>
  );
};

export default AlgorithmDescription;
