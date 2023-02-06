import styles from "./AlgorithmImplementation.module.scss";

const AlgorithmImplementation = ({ implementation }) => {
  return (
    <section className={styles["implementation-section"]}>
      <h2>IMPLEMENTATION</h2>
      <pre>
        <code>
          {`
    ${implementation}
            `}
        </code>
      </pre>
    </section>
  );
};

export default AlgorithmImplementation;
