import React, { useContext, useState } from "react";

const TransitionContext = React.createContext();

const TransitionProvider = ({ children }) => {
  const [transitionActive, setTransitionActive] = useState(false);

  return (
    <TransitionContext.Provider
      value={{
        transitionActive,
        setTransitionActive,
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
