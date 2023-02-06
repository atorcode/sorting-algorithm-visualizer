import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Algorithm from "./pages/Algorithm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/algorithms/:algorithmType" element={<Algorithm />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
