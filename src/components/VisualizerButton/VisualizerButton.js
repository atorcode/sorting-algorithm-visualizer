import styles from "./VisualizerButton.module.scss";
import { HiPlay } from "react-icons/hi2";
import { IoStop } from "react-icons/io5";
import { FiShuffle } from "react-icons/fi";

const VisualizerButton = ({
  type,
  shuffleBars,
  setBarsToRender,
  createBarArray,
  numBars,
}) => {
  let buttonToRender;
  switch (type) {
    case "shuffle":
      buttonToRender = (
        <button
          className={styles["btn"]}
          onClick={() => {
            // create new array instead of modifying old because React
            setBarsToRender(shuffleBars(createBarArray(numBars)));
          }}
        >
          <FiShuffle className={styles["btn-icon"]} />
        </button>
      );

      break;
    case "play":
      buttonToRender = (
        <button
          className={styles["btn"]}
          onClick={(e) => {
            return console.log(e);
          }}
        >
          <HiPlay className={styles["btn-icon"]} />
        </button>
      );
      break;
    case "stop":
      buttonToRender = (
        <button
          className={styles["btn"]}
          onClick={(e) => {
            return console.log(e);
          }}
        >
          <IoStop className={styles["btn-icon"]} />
        </button>
      );
      break;
  }
  return <>{buttonToRender}</>;
};

export default VisualizerButton;
