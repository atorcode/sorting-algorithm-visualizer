import { useEffect, useRef } from "react";
import {
  LETTERS,
  MIN_ANIMATION_DURATION,
  MAX_ANIMATION_DURATION,
  ANIMATION_DELAY,
} from "../../constants";

const MainHeroHeadingLetter = ({ char }) => {
  const letterRef = useRef(null);

  const getRandomDurationBetween = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const getRandomLetter = () => {
    return LETTERS[Math.floor(Math.random() * 26)];
  };

  const scrambleLetter = () => {
    if (letterRef && letterRef.current) {
      letterRef.current.innerText = getRandomLetter();
    }
  };

  useEffect(() => {
    let intervalId;
    setTimeout(() => {
      intervalId = setInterval(() => {
        scrambleLetter();
      }, 70);
    }, ANIMATION_DELAY);

    setTimeout(() => {
      if (letterRef && letterRef.current) {
        letterRef.current.innerText = char;
      }
      clearInterval(intervalId);
    }, getRandomDurationBetween(MIN_ANIMATION_DURATION, MAX_ANIMATION_DURATION));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={letterRef}>{char}</span>;
};

export default MainHeroHeadingLetter;
