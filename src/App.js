import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Work } from "./Work";
import { Blog } from "./Blog";
import { Errorp } from "./Errorp";

function App() {
  const dive = "I am a student of Auchi poly";

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home name={dive} />} />
        <Route path="/work" element={<Work />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Errorp />} />
      </Routes>
    </Router>
  );
}

export default App;
