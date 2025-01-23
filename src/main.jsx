import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import App from "./App.jsx";
import Nav from "./components/Nav";
import { AnimatePresence } from "framer-motion";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AnimatePresence>
      
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    
    </AnimatePresence>
  </BrowserRouter>
);
