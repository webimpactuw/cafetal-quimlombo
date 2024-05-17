
import './App.css';
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./about.js";
import Contact from "./Contact.js";
import Menu from "./Menu.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import ScrollToTop from './scrollToTop.js';

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
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
