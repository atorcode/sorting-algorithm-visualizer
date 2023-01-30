import styles from "./Hero.module.scss";
import HeroImage from "../HeroImage";
import HeroHeading from "../HeroHeading";

const Hero = () => {
  return (
    <section className={styles["hero-section"]}>
      <HeroImage />
      <HeroHeading />
    </section>
  );
};

export default Hero;
