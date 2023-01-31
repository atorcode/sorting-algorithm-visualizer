import styles from "./AlgorithmDetails.module.scss";
import ComplexityTable from "../ComplexityTable";

const AlgorithmDetails = () => {
  return (
    <section className={styles["details-section"]}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti libero
        distinctio fugit voluptas! Sapiente quibusdam eius similique nisi
        eligendi nam unde quam! Expedita, illo itaque, recusandae sequi est ab
        officia unde corporis maiores, modi rem? Recusandae incidunt sequi quae,
        iusto ipsam ut alias. Eligendi rerum nihil harum blanditiis nobis
        voluptate natus reprehenderit laboriosam repellat similique! Cum eos
        ipsum fuga consectetur aliquid repellendus amet aut dicta optio,
        similique reiciendis aliquam voluptatem neque accusantium nobis natus
        hic! Officia, voluptates debitis! Numquam id hic ad debitis sapiente,
        similique eaque iusto iste soluta ullam nobis illo animi beatae quisquam
        excepturi enim. Facilis, quo aliquam.
      </p>
      <ComplexityTable />
    </section>
  );
};

export default AlgorithmDetails;
