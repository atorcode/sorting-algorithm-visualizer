import styles from "./VisualizerButton.module.scss";
import { HiPlay } from "react-icons/hi2";
import { IoStop } from "react-icons/io5";
import { FiShuffle } from "react-icons/fi";
import { useEffect, useRef } from "react";

const VisualizerButton = ({
  type,
  shuffleBars,
  setBarsToRender,
  createBarArray,
  numBars,
  shuffleIsDisabled,
  setShuffleIsDisabled,
}) => {
  const shuffleButtonEl = useRef(null);

  // This useEffect runs on every VisualizerButton, not just the Shuffle Button as a result of the way the component structure is organized.
  useEffect(() => {
    if (shuffleIsDisabled && shuffleButtonEl && shuffleButtonEl.current) {
      shuffleButtonEl.current.classList.add(styles["btn-disabled"]);
    } else if (
      !shuffleIsDisabled &&
      shuffleButtonEl &&
      shuffleButtonEl.current
    ) {
      shuffleButtonEl.current.classList.remove(styles["btn-disabled"]);
    }
  }, [shuffleIsDisabled]);

  let buttonToRender;
  switch (type) {
    case "shuffle":
      buttonToRender = (
        <button
          ref={shuffleButtonEl}
          disabled={shuffleIsDisabled}
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
            setShuffleIsDisabled((prev) => !prev);
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
