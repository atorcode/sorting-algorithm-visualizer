import styles from "./VisualizerHeroHeading.module.scss";

const VisualizerHeroHeading = ({ name }) => {
  const nameWithCapitalization = () => {};

  return <h1 className={styles["heading"]}>{name}</h1>;
};

export default VisualizerHeroHeading;
