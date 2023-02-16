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
  isShuffling,
  setIsShuffling,
  isPlaying,
  setIsPlaying,
}) => {
  const shuffleButtonEl = useRef(null);
  const playButtonEl = useRef(null);

  // This useEffect runs on every VisualizerButton, not just the Shuffle Button as a result of the way the component structure is organized.
  useEffect(() => {
    if (
      (isShuffling && shuffleButtonEl && shuffleButtonEl.current) ||
      (isPlaying && shuffleButtonEl && shuffleButtonEl.current)
    ) {
      shuffleButtonEl.current.classList.add(styles["btn-disabled"]);
    } else if (
      (!isShuffling && shuffleButtonEl && shuffleButtonEl.current) ||
      (!isShuffling && shuffleButtonEl && shuffleButtonEl.current)
    ) {
      shuffleButtonEl.current.classList.remove(styles["btn-disabled"]);
    }
  }, [isShuffling, isPlaying]);

  let buttonToRender;
  switch (type) {
    case "shuffle":
      buttonToRender = (
        <button
          ref={shuffleButtonEl}
          disabled={isShuffling || isPlaying}
          className={styles["btn"]}
          onClick={() => {
            // create new array instead of modifying old because React
            setBarsToRender(shuffleBars(createBarArray(numBars)));
            setIsShuffling(true);
            setIsPlaying(true);
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
