import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ExpandedNavBarProvider } from "./contexts/ExpandedNavBarContext";
import { TransitionProvider } from "./contexts/TransitionContext";
import { AnimationProvider } from "./contexts/AnimationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ExpandedNavBarProvider>
      <AnimationProvider>
        <TransitionProvider>
          <App />
        </TransitionProvider>
      </AnimationProvider>
    </ExpandedNavBarProvider>
  </React.StrictMode>
);
