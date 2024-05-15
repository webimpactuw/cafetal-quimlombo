import "./App.css";
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./placeholder-about.js";
import Contact from "./placeholder-contact.js";
import Menu from "./placeholder-menu.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

function App() {
  return (
      <div className="app">
        <Router>
        <Navbar />
        <div>
            <Routes>
              <Route path="/" element ={<Content/>}></Route>
              <Route path="/about" element={ <About />}> </Route>
              <Route path="/menu" element={ <Menu />}> </Route>
              <Route path="/contact" element={ <Contact />}> </Route>
            </Routes>
        </div>
        </Router>
        <Footer/>
      </div>

  );
}

export default App;
