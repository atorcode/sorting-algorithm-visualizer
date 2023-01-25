import styles from "./HeroHeading.module.scss";
import HeroHeadingLetter from "../HeroHeadingLetter";
import { useEffect, useRef } from "react";
import {
  HERO_HEADING_WORD1,
  HERO_HEADING_WORD2,
  HERO_HEADING_WORD3,
} from "../../constants";

const HeroHeading = () => {
  return (
    <h1 className={styles["heading"]}>
      {HERO_HEADING_WORD1.split("").map((char, index) => {
        return <HeroHeadingLetter key={index} char={char} />;
      })}
      &nbsp;
      {HERO_HEADING_WORD2.split("").map((char, index) => {
        return <HeroHeadingLetter key={index} char={char} />;
      })}
      <br />
      {HERO_HEADING_WORD3.split("").map((char, index) => {
        return <HeroHeadingLetter key={index} char={char} />;
      })}
    </h1>
  );
};

export default HeroHeading;
