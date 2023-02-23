import React, { useContext, useState, useRef } from "react";

const TransitionContext = React.createContext();

const TransitionProvider = ({ children }) => {
  const [complexityTableTransitionActive, setComplexityTableTransitionActive] =
    useState(false);
  const [implementationTransitionActive, setImplementationTransitionActive] =
    useState(false);
  const [heroHeadingTransitionActive, setHeroHeadingTransitionActive] =
    useState(false);

  return (
    <TransitionContext.Provider
      value={{
        complexityTableTransitionActive,
        setComplexityTableTransitionActive,
        implementationTransitionActive,
        setImplementationTransitionActive,
        heroHeadingTransitionActive,
        setHeroHeadingTransitionActive,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

const useTransitionContext = () => {
  return useContext(TransitionContext);
};

export { TransitionProvider, useTransitionContext };
