import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layoat from './Companents/Layoat';
import Home from "./Companents/Home";
import Project from "./Companents/Project";
import Contact from "./Companents/Contact";
import "./Companents/language/i18n";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layoat />}>
          <Route index element={<Home />} />
          <Route path="Project" element={<Project />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
