import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Computer from "../components/Computer";
const Home = () => {
  return (
    <>
      <motion.div
        location={location}
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="center">
          <Computer></Computer>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
