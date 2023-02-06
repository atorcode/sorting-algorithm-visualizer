import styles from "./AlgorithmComplexityTable.module.scss";

const AlgorithmComplexityTable = ({ complexity }) => {
  return (
    <section className={styles["table-section"]}>
      <h2>COMPLEXITY</h2>
      <table className={styles["table"]}>
        <tbody>
          <tr>
            <th>Time (Average Case)</th>
            <td>{complexity.timeAvg}</td>
          </tr>
          <tr>
            <th>Time (Worst Case)</th>
            <td>{complexity.timeWorst}</td>
          </tr>
          <tr>
            <th>Time (Best Case)</th>
            <td>{complexity.timeBest}</td>
          </tr>
          <tr>
            <th>Space</th>
            <td>{complexity.space}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default AlgorithmComplexityTable;
