import styles from "./VisualizerButton.module.scss";
import { HiPlay } from "react-icons/hi2";
import { IoStop } from "react-icons/io5";
import { FiShuffle } from "react-icons/fi";
import { useEffect, useRef } from "react";
import { useAnimationContext } from "../../contexts/AnimationContext";

const VisualizerButton = ({ type, shuffleBars, algorithmToPlay }) => {
  const shuffleButtonEl = useRef(null);
  const playButtonEl = useRef(null);

  const {
    isPlaying,
    setIsPlaying,
    timers,
    barsToRender,
    numBars,
    createBarArray,
  } = useAnimationContext();

  // This useEffect runs on every VisualizerButton, not just the Shuffle Button as a result of the way the component structure is organized.
  useEffect(() => {
    if (isPlaying && shuffleButtonEl && shuffleButtonEl.current) {
      shuffleButtonEl.current.classList.add(styles["btn-disabled"]);
    } else if (!isPlaying && shuffleButtonEl && shuffleButtonEl.current) {
      shuffleButtonEl.current.classList.remove(styles["btn-disabled"]);
    }
  }, [isPlaying]);

  let buttonToRender;
  switch (type) {
    case "shuffle":
      buttonToRender = (
        <button
          ref={shuffleButtonEl}
          disabled={isPlaying}
          className={styles["btn"]}
          onClick={() => {
            shuffleBars(barsToRender);
          }}
        >
          <FiShuffle className={styles["btn-icon"]} />
        </button>
      );

      break;
    case "play":
      buttonToRender = (
        <button
          ref={playButtonEl}
          className={styles["btn"]}
          onClick={(e) => {
            // Play button
            if (algorithmToPlay && !isPlaying) {
              algorithmToPlay();
            }
            // Stop button
            if (isPlaying) {
              timers.current.forEach((timer) => {
                clearInterval(timer);
              });
              createBarArray(numBars, true);
            }
            if (algorithmToPlay) {
              setIsPlaying((prev) => !prev);
            }
          }}
        >
          {isPlaying ? (
            <IoStop className={styles["btn-icon"]} />
          ) : (
            <HiPlay className={styles["btn-icon"]} />
          )}
        </button>
      );
      break;
    default:
      buttonToRender = null;
  }
  return <>{buttonToRender}</>;
};

export default VisualizerButton;
