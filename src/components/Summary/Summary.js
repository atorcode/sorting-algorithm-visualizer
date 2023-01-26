import AlgorithmsButton from "../AlgorithmsButton";
import styles from "./Summary.module.scss";

const Summary = ({ navIsExpanded, setNavIsExpanded }) => {
  return (
    <div className={styles["background"]}>
      <article className={styles["summary"]}>
        <h2>Sorting Algorithms</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          a dolorem, culpa incidunt quaerat nemo fugiat? Repellat voluptatibus
          aliquam fugit iste velit eum voluptates dignissimos, aliquid
          reiciendis. Atque, eos repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          a dolorem, culpa incidunt quaerat nemo fugiat? Repellat voluptatibus
          aliquam fugit iste velit eum voluptates dignissimos, aliquid
          reiciendis. Atque, eos repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          a dolorem, culpa incidunt quaerat nemo fugiat? Repellat voluptatibus
          aliquam fugit iste velit eum voluptates dignissimos, aliquid
          reiciendis. Atque, eos repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          a dolorem, culpa incidunt quaerat nemo fugiat? Repellat voluptatibus
          aliquam fugit iste velit eum voluptates dignissimos, aliquid
          reiciendis. Atque, eos repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          a dolorem, culpa incidunt quaerat nemo fugiat? Repellat voluptatibus
          aliquam fugit iste velit eum voluptates dignissimos, aliquid
          reiciendis. Atque, eos repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          a dolorem, culpa incidunt quaerat nemo fugiat? Repellat voluptatibus
          aliquam fugit iste velit eum voluptates dignissimos, aliquid
          reiciendis. Atque, eos repudiandae!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          a dolorem, culpa incidunt quaerat nemo fugiat? Repellat voluptatibus
          aliquam fugit iste velit eum voluptates dignissimos, aliquid
          reiciendis. Atque, eos repudiandae!
        </p>
      </article>
      <div className={styles["button-container"]}>
        <AlgorithmsButton
          navIsExpanded={navIsExpanded}
          setNavIsExpanded={setNavIsExpanded}
        />
      </div>
    </div>
  );
};

export default Summary;
