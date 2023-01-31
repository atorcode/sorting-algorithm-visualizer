import styles from "./VisualizerHero.module.scss";
import HeroImage from "../HeroImage";
import VisualizerHeroHeading from "../VisualizerHeroHeading";

const VisualizerHero = () => {
  return (
    <main className={styles["main"]}>
      <VisualizerHeroHeading />
      {/* potentially change to a different hero image later */}
      <HeroImage />
    </main>
  );
};

export default VisualizerHero;
