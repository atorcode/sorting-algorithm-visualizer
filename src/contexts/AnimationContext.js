import React, { useRef, useState, useContext } from "react";
import {
  calcWidthPercentage,
  calcHeightPercentage,
  calcLeftPosPercentage,
} from "../utils/utils";

import { swapBarsImmutable } from "../utils/swaps";

const AnimationContext = React.createContext();

const AnimationProvider = ({ children }) => {
  const [numBars, setNumBars] = useState(100);
  const [barsToRender, setBarsToRender] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  let highlightedIndex = useRef(null);
  let barsContainer = useRef(null);

  const timers = useRef([]);

  // Synchronous shuffle
  const initBars = (bars) => {
    let currentIndex = bars.length - 1;
    let updatedBars = [];
    while (currentIndex > 0) {
      // randomIndex is always different from currentIndex, so each bar will always shuffle
      const randomIndex = Math.floor(Math.random() * currentIndex);
      if (updatedBars.length < 1) {
        updatedBars = swapBarsImmutable(bars, currentIndex, randomIndex);
      } else {
        updatedBars = swapBarsImmutable(updatedBars, currentIndex, randomIndex);
      }
      currentIndex--;
    }
    setBarsToRender(updatedBars);
  };

  // Creates a shuffled or sorted bar array of a length specified by quantity
  const createBarArray = (quantity, sorted = false) => {
    let bars = [];
    const width = calcWidthPercentage(quantity);
    for (let i = 0; i < quantity; i++) {
      const height = calcHeightPercentage(quantity, i + 1);
      const left = calcLeftPosPercentage(quantity, i + 1);
      bars.push({
        correctPos: i,
        height: height,
        width: width,
        left: left,
      });
    }
    if (!sorted) {
      return initBars(bars);
    } else {
      return setBarsToRender(bars);
    }
  };

  return (
    <AnimationContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        highlightedIndex,
        barsContainer,
        timers,
        barsToRender,
        setBarsToRender,
        numBars,
        setNumBars,
        createBarArray,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

const useAnimationContext = () => {
  return useContext(AnimationContext);
};

export { AnimationProvider, useAnimationContext };
