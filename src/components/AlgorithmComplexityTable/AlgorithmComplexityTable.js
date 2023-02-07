import styles from "./AlgorithmComplexityTable.module.scss";

const AlgorithmComplexityTable = ({ complexity }) => {
  const createMarkupTimeAvg = () => {
    return { __html: complexity.timeAvg };
  };
  const createMarkupTimeWorst = () => {
    return { __html: complexity.timeWorst };
  };
  const createMarkupTimeBest = () => {
    return { __html: complexity.timeBest };
  };
  const createMarkupSpace = () => {
    return { __html: complexity.space };
  };

  return (
    <section className={styles["table-section"]}>
      <h2>COMPLEXITY</h2>
      <table className={styles["table"]}>
        <tbody>
          <tr>
            <th>Time (Average Case)</th>
            {complexity && (
              <td dangerouslySetInnerHTML={createMarkupTimeAvg()}></td>
            )}
          </tr>
          <tr>
            <th>Time (Worst Case)</th>
            {complexity && (
              <td dangerouslySetInnerHTML={createMarkupTimeWorst()}></td>
            )}
          </tr>
          <tr>
            <th>Time (Best Case)</th>
            {complexity && (
              <td dangerouslySetInnerHTML={createMarkupTimeBest()}></td>
            )}
          </tr>
          <tr>
            <th>Space</th>
            {complexity && (
              <td dangerouslySetInnerHTML={createMarkupSpace()}></td>
            )}
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AlgorithmComplexityTable;
