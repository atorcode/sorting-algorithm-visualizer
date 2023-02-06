import styles from "./VisualizerButton.module.scss";
import { HiPlay } from "react-icons/hi2";
import { IoStop } from "react-icons/io5";
import { FiShuffle } from "react-icons/fi";

const VisualizerButton = ({ type }) => {
  let iconToRender;
  switch (type) {
    case "shuffle":
      iconToRender = <FiShuffle className={styles["btn-icon"]} />;
      break;
    case "play":
      iconToRender = <HiPlay className={styles["btn-icon"]} />;
      break;
    case "stop":
      iconToRender = <IoStop className={styles["btn-icon"]} />;
      break;
  }
  return (
    <button
      className={styles["btn"]}
      onClick={(e) => {
        return console.log(e);
      }}
    >
      {iconToRender}
    </button>
  );
};

export default VisualizerButton;
