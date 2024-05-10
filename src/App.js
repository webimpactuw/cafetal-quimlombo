import './App.css';
import Contact from "./Contact.js";
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./placeholder-about.js";
import Menu from "./placeholder-menu.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div>
            <Routes>
              <Route path="/"></Route>
              <Route path="/about" element={ <About />}> </Route>
              <Route path="/menu" element={ <Menu />}> </Route>
              <Route path="/contact" element={ <Contact />}> </Route>
            </Routes>
        </div>
        </Router>
    </div>
  )
}


export default App;
