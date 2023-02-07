import styles from "./AlgorithmImplementation.module.scss";

const AlgorithmImplementation = ({ implementation }) => {
  const createMarkup = () => {
    return { __html: implementation };
  };
  return (
    <section className={styles["implementation-section"]}>
      <h2>IMPLEMENTATION</h2>
      <pre>
        <code dangerouslySetInnerHTML={createMarkup()}></code>
      </pre>
    </section>
  );
};

export default AlgorithmImplementation;
