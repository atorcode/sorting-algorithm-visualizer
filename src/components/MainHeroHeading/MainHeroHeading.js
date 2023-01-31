import styles from "./MainHeroHeading.module.scss";
import MainHeroHeadingLetter from "../MainHeroHeadingLetter";

import {
  HERO_HEADING_WORD1,
  HERO_HEADING_WORD2,
  HERO_HEADING_WORD3,
} from "../../constants";

const MainHeroHeading = () => {
  return (
    <h1 className={styles["heading"]}>
      {HERO_HEADING_WORD1.split("").map((char, index) => {
        return <MainHeroHeadingLetter key={index} char={char} />;
      })}
      &nbsp;
      {HERO_HEADING_WORD2.split("").map((char, index) => {
        return <MainHeroHeadingLetter key={index} char={char} />;
      })}
      <br />
      {HERO_HEADING_WORD3.split("").map((char, index) => {
        return <MainHeroHeadingLetter key={index} char={char} />;
      })}
    </h1>
  );
};

export default MainHeroHeading;
