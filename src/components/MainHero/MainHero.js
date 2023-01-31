import styles from "./MainHero.module.scss";
import HeroImage from "../HeroImage";
import MainHeroHeading from "../MainHeroHeading";

const MainHero = () => {
  return (
    <section className={styles["hero-section"]}>
      <HeroImage />
      <MainHeroHeading />
    </section>
  );
};

export default MainHero;
