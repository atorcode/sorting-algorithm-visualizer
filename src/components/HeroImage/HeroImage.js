import styles from "./HeroImage.module.scss";
import HexImage from "../../media/hex.jpg";

const HeroImage = ({ setImageLoaded }) => {
  return (
    <div className={styles["hero-img-container"]}>
      {/*The purpose of this "empty" image element is simply to signal to react that the CSS background-image with the same path is loaded*/}
      <img
        src={HexImage}
        alt=""
        onLoad={() => {
          setImageLoaded && setImageLoaded(true);
        }}
        style={{ display: "none" }}
      />
    </div>
  );
};

// onLoad={() => {
//           console.log("load");
//           setImageLoaded(true);
//         }}

export default HeroImage;
