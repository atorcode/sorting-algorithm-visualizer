import styles from "./VisualizerHero.module.scss";
import HeroImage from "../HeroImage";
import VisualizerHeroHeading from "../VisualizerHeroHeading";
import VisualizerControls from "../VisualizerControls";
import VisualizerBars from "../VisualizerBars";
import { useState } from "react";

const VisualizerHero = ({ name }) => {
  const [barsToRender, setBarsToRender] = useState([]);

  return (
    <main className={styles["main"]}>
      <div className={styles["content-container"]}>
        <VisualizerHeroHeading name={name} />
        <VisualizerControls
          name={name}
          barsToRender={barsToRender}
          setBarsToRender={setBarsToRender}
        />
        <VisualizerBars name={name} barsToRender={barsToRender} />
      </div>
      <HeroImage />
    </main>
  );
};

export default VisualizerHero;
