import styles from "./VisualizerButton.module.scss";
import { HiPlay } from "react-icons/hi2";
import { IoStop } from "react-icons/io5";
import { FiShuffle } from "react-icons/fi";
import { useEffect, useRef } from "react";

const VisualizerButton = ({
  type,
  shuffleBars,
  barsToRender,
  isPlaying,
  setIsPlaying,
  timers,
}) => {
  const shuffleButtonEl = useRef(null);
  const playButtonEl = useRef(null);

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
            if (isPlaying) {
              timers.forEach((timer) => {
                clearInterval(timer);
              });
            }
            setIsPlaying((prev) => !prev);
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
  }
  return <>{buttonToRender}</>;
};

export default VisualizerButton;
