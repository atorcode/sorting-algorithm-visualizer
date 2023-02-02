import styles from "./VisualizerHero.module.scss";
import HeroImage from "../HeroImage";
import VisualizerHeroHeading from "../VisualizerHeroHeading";
import VisualizerControls from "../VisualizerControls";
import VisualizerBars from "../VisualizerBars";

const VisualizerHero = () => {
  return (
    <main className={styles["main"]}>
      <div className={styles["content-container"]}>
        <VisualizerHeroHeading />
        <VisualizerControls />
        <VisualizerBars />
      </div>
      <HeroImage />
    </main>
  );
};

export default VisualizerHero;
