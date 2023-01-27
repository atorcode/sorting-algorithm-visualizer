import styles from "./Hero.module.scss";
import hexTiling from "../../media/hex.jpg";
import HeroHeading from "../HeroHeading";

const Hero = () => {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-img-container"]}></div>
      <HeroHeading />
    </section>
  );
};

export default Hero;
