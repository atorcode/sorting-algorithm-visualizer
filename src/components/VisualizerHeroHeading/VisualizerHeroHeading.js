import styles from "./VisualizerHeroHeading.module.scss";
import { applyInitialCase } from "../../utils/utils";

const VisualizerHeroHeading = ({ name }) => {
  return <h1 className={styles["heading"]}>{applyInitialCase(name)}</h1>;
};

export default VisualizerHeroHeading;
