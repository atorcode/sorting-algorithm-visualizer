import React, { useRef, useState, useContext } from "react";

const AnimationContext = React.createContext();

const AnimationProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  let highlightedIndex = useRef(null);

  const timers = useRef([]);

  return (
    <AnimationContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
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
