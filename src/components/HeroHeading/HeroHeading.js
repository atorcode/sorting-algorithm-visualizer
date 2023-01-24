import styles from "./HeroHeading.module.scss";
import { useEffect, useRef } from "react";
import { HEROHEADING, LETTERS } from "../../constants";

const HeroHeading = () => {
  const headingEl = useRef(null);

  const getRandomLetter = () => {
    console.log(LETTERS[Math.floor(Math.random() * 26)]);
    return LETTERS[Math.floor(Math.random() * 26)];
  };

  const scrambleLetters = (str) => {
    const arr = str.split("");
    const result = [];

    // once per func call for testing
    // getRandomLetter();
    arr.forEach((char) => {
      if (char !== "") {
        // result.push(getRandomLetter());
      }
    });

    // headingEl.current.innerText = result.join("");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrambleLetters(HEROHEADING);
    }, 50);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <h1 ref={headingEl} className={styles["heading"]}>
      SORTING&nbsp;ALGORITHM VISUALIZER
    </h1>
  );
};

export default HeroHeading;
