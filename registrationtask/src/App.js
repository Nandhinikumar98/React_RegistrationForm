import "./App.css";
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Form from "./Form";
import Contextform from "./Contextform";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Form">Form</Link>
          </li>
          <li>
            <Link to="/Contextform">Contextform</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Contextform" element={<Contextform />} />
      </Routes>
    </div>
  );
}

export default App;
