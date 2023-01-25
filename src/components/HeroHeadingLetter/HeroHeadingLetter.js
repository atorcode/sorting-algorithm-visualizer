import styles from "./HeroHeadingLetter.module.scss";
import { useEffect, useRef } from "react";
import {
  LETTERS,
  MIN_ANIMATION_DURATION,
  MAX_ANIMATION_DURATION,
  ANIMATION_DELAY,
} from "../../constants";

const HeroHeadingLetter = ({ char }) => {
  const letterRef = useRef(null);

  const getRandomDurationBetween = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const getRandomLetter = () => {
    return LETTERS[Math.floor(Math.random() * 26)];
  };

  const scrambleLetter = () => {
    letterRef.current.innerText = getRandomLetter();
  };

  useEffect(() => {
    let intervalId;
    setTimeout(() => {
      intervalId = setInterval(() => {
        scrambleLetter();
      }, 70);
    }, ANIMATION_DELAY);

    setTimeout(() => {
      letterRef.current.innerText = char;
      clearInterval(intervalId);
    }, getRandomDurationBetween(MIN_ANIMATION_DURATION, MAX_ANIMATION_DURATION));
  }, []);

  return <span ref={letterRef}>{char}</span>;
};

export default HeroHeadingLetter;
