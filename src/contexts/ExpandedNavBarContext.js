import React, { useState, useContext } from "react";

const ExpandedNavBarContext = React.createContext();

const ExpandedNavBarProvider = ({ children }) => {
  const [navIsExpanded, setNavIsExpanded] = useState(false);

  return (
    <ExpandedNavBarContext.Provider value={{ navIsExpanded, setNavIsExpanded }}>
      {children}
    </ExpandedNavBarContext.Provider>
  );
};

const useExpandedNavBarContext = () => {
  return useContext(ExpandedNavBarContext);
};

export { ExpandedNavBarProvider, useExpandedNavBarContext };
