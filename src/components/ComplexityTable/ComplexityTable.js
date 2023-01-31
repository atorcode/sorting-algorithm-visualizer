import styles from "./ComplexityTable.module.scss";

const ComplexityTable = () => {
  return (
    <section className={styles["table-section"]}>
      <h2>COMPLEXITY</h2>
      <table className={styles["table"]}>
        <tbody>
          <tr>
            <th>Time (Average Case)</th>
            <td>test</td>
          </tr>
          <tr>
            <th>Time (Worst Case)</th>
            <td>test</td>
          </tr>
          <tr>
            <th>Time (Best Case)</th>
            <td>test</td>
          </tr>
          <tr>
            <th>Space</th>
            <td>test</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ComplexityTable;
