import styles from "./HeroHeading.module.scss";
import { useEffect } from "react";
import { HEROHEADING, LETTERS } from "../../constants";

const HeroHeading = () => {
  const getRandomLetter = () => {
    console.log(LETTERS[Math.floor(Math.random() * 26)]);
    return LETTERS[Math.floor(Math.random() * 26)];
  };

  const scrambleLetters = (str) => {
    const arr = str.split();

    arr.forEach((char) => {
      if (char !== "") {
        char = getRandomLetter();
      }
    });
  };

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   scrambleLetters(HEROHEADING);
    // }, 500);
    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  return <h1 className={styles["heading"]}>SORTING ALGORITHM VISUALIZER</h1>;
};

export default HeroHeading;
