import styles from "./VisualizerHero.module.scss";
import HeroImage from "../HeroImage";
import VisualizerHeroHeading from "../VisualizerHeroHeading";
import VisualizerBars from "../VisualizerBars";

const VisualizerHero = () => {
  return (
    <main className={styles["main"]}>
      <VisualizerHeroHeading />
      <VisualizerBars />
      {/* potentially change to a different hero image later */}
      <HeroImage />
    </main>
  );
};

export default VisualizerHero;
