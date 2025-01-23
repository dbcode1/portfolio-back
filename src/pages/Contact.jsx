import React from "react";
import ContactForm from "../components/ContactForm";
// import nodemailer from "nodemailer";
import { motion } from "framer-motion";
const Contact = () => {
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
          
          <ContactForm></ContactForm>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
