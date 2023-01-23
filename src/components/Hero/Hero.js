import styles from "./Hero.module.scss";
import hexTiling from "../../media/hex.jpg";

const Hero = () => {
  return (
    <div className={styles["hero-img-container"]}>
      <img
        src={hexTiling}
        alt="Futuristic hexagon tiling. The tiles are predominantly black with a few that are orange gold, and some of them are raised."
      />
    </div>
  );
};

export default Hero;
