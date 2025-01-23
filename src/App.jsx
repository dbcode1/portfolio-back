import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
    <h1>test</h1>
          <Outlet />
    </>
  );
}

export default App;
