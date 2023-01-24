import "./App.scss";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ExpandedNavBar from "./components/ExpandedNavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      {/* conditionally render later */}
      {/* <ExpandedNavBar /> */}
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
