import "./App.css";
import Navbar from "./Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Test from './Test.js'; 

function App() {
  return (
      <div className="app">
        <Router>
        <Navbar />
        <div>
            <Routes>
              <Route path="/Test" element={ <Test />} />
            </Routes>
        </div>
        </Router>
      </div>
  );
}

export default App;
