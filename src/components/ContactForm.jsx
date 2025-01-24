import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { div } from "framer-motion/client";

const ContactForm = () => {
  const [messageData, setMessageData] = useState("");
  const submit = async (e) => {
    e.preventDefault();

    try {
      const params = { message: messageData };
      console.log(messageData);
      const response = await axios({
        method: "post",
        url: `${import.meta.env.VITE_API}/api/email`,
        data: params,
      });
      toast("Email sent sucessfully");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  const messageHandler = (e) => {
    console.log(e.target.value);
    setMessageData(e.target.value);
  };
  console.log("message", messageData);
  return (
    <div className="form-wrapper">
      <ToastContainer />
      <form className="form">
        <label htmlFor="email">Email</label>
        <input type="text" className="form__email" />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          onChange={messageHandler}
          type="text"
          className="form__message"
        />
        <a href="#" type="button" onClick={submit} className="form__submit">
          Contact
        </a>
      </form>
    </div>
  );
};
export default ContactForm;
