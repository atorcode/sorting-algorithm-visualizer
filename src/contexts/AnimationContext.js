import React, { useRef, useState, useContext } from "react";

const AnimationContext = React.createContext();

const AnimationProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  let barsContainer = useRef(null);
  let highlightedIndex = useRef(null);

  const timers = useRef([]);

  return (
    <AnimationContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        barsContainer,
        highlightedIndex,
        timers,
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
