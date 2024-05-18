import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./scrollToTop.js";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from "./Home.js";
import About from "./About.js";
import Menu from "./Menu.js";
import Contact from "./Contact.js";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
    // TODO LIST:
    // - INSTAGRAM LINK
    // - CONTACT PAGE BACKGROUND COLOR
  );
}

export default App;
