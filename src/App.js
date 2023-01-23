import "./App.scss";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ExpandedNavBar from "./components/ExpandedNavBar";

function App() {
  return (
    <div>
      <NavBar />
      {/* conditionally render later */}
      <ExpandedNavBar />
      <Hero />
    </div>
  );
}

export default App;
