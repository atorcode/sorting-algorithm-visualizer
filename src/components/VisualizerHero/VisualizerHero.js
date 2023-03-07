import styles from "./VisualizerHero.module.scss";
import HeroImage from "../HeroImage";
import VisualizerHeroHeading from "../VisualizerHeroHeading";
import VisualizerControls from "../VisualizerControls";
import VisualizerBars from "../VisualizerBars";

const VisualizerHero = ({ name }) => {
  return (
    <main className={styles["main"]}>
      <div className={styles["content-container"]}>
        <VisualizerHeroHeading name={name} />
        <VisualizerControls name={name} />
        <VisualizerBars name={name} />
      </div>
      <HeroImage />
    </main>
  );
};

export default VisualizerHero;
