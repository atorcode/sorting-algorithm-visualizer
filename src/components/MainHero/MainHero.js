import styles from "./MainHero.module.scss";
import HeroImage from "../HeroImage";
import MainHeroHeading from "../MainHeroHeading";
import { useState } from "react";

const MainHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className={styles["hero-section"]}>
      <HeroImage setImageLoaded={setImageLoaded} />
      <MainHeroHeading imageLoaded={imageLoaded} />
    </section>
  );
};

export default MainHero;
