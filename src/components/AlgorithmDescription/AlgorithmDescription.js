import styles from "./AlgorithmDescription.module.scss";

const AlgorithmDescription = ({ description }) => {
  const createMarkup = () => {
    return { __html: description };
  };
  return (
    <section className={styles["description-section"]}>
      <h2>DESCRIPTION</h2>
      <div dangerouslySetInnerHTML={createMarkup()}></div>
    </section>
  );
};

export default AlgorithmDescription;
