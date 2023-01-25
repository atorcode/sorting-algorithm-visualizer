import styles from "./HeroHeading.module.scss";
import { useEffect, useRef } from "react";
import { HEROHEADING, LETTERS } from "../../constants";

const HeroHeading = () => {
  const headingEl = useRef(null);

  const getRandomLetter = () => {
    return LETTERS[Math.floor(Math.random() * 26)];
  };

  const scrambleLetters = (str) => {
    const arr = str.split("");
    const result = [];

    // once per func call for testing
    // getRandomLetter();
    arr.forEach((char) => {
      if (char !== " ") {
        result.push(getRandomLetter());
        // The first space should be non-breaking to keep words 1 and 2 together
      } else if (!result.includes("&nbsp;")) {
        result.push("&nbsp;");
        // The second space should signify a line break
      } else {
        result.push("<br />");
      }
    });

    headingEl.current.innerHTML = result.join("");
  };

  useEffect(() => {
    let intervalId;
    setTimeout(() => {
      intervalId = setInterval(() => {
        scrambleLetters(HEROHEADING);
      }, 70);
    }, 500);
    // const intervalId = setInterval(() => {
    //   scrambleLetters(HEROHEADING);
    // }, 50);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <h1 ref={headingEl} className={styles["heading"]}>
      SORTING&nbsp;ALGORITHM
      <br />
      VISUALIZER
    </h1>
  );
};

export default HeroHeading;
