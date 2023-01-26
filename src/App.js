import "./App.scss";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [navIsExpanded, setNavIsExpanded] = useState(false);

  return (
    <div>
      <NavBar
        navIsExpanded={navIsExpanded}
        setNavIsExpanded={setNavIsExpanded}
      />
      <Hero />
      <Summary
        navIsExpanded={navIsExpanded}
        setNavIsExpanded={setNavIsExpanded}
      />
      <Footer />
    </div>
  );
}

export default App;
