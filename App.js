
import React from "react";
import"./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Navbar/>
    </>
   
  );
}

export default App;
