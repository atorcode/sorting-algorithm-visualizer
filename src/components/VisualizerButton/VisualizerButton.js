import styles from "./VisualizerButton.module.scss";
import { HiPlay } from "react-icons/hi2";
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
  }
  return <button className={styles["btn"]}>{iconToRender}</button>;
};

export default VisualizerButton;
