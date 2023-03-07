import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// pages
import Home from "./pages/Home";
import Algorithm from "./pages/Algorithm";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
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
