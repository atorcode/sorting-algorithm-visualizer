import styles from "./VisualizerHero.module.scss";
import HeroImage from "../HeroImage";
import VisualizerHeroHeading from "../VisualizerHeroHeading";
import VisualizerControls from "../VisualizerControls";
import VisualizerBars from "../VisualizerBars";
import { useState } from "react";

const VisualizerHero = () => {
  const [numBars, setNumBars] = useState(10);

  const propsToPass = { numBars, setNumBars };
  return (
    <main className={styles["main"]}>
      <div className={styles["content-container"]}>
        <VisualizerHeroHeading />
        <VisualizerControls {...propsToPass} />
        <VisualizerBars />
      </div>
      <HeroImage />
    </main>
  );
};

export default VisualizerHero;
