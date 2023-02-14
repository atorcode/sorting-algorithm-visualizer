import React, { useContext, useState } from "react";

const TransitionContext = React.createContext();

const TransitionProvider = ({ children }) => {
  const [complexityTableTransitionActive, setComplexityTableTransitionActive] =
    useState(false);
  const [implementationTransitionActive, setImplementationTransitionActive] =
    useState(false);

  return (
    <TransitionContext.Provider
      value={{
        complexityTableTransitionActive,
        setComplexityTableTransitionActive,
        implementationTransitionActive,
        setImplementationTransitionActive,
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
