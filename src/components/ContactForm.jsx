import React, { useState } from "react";
import axios from "axios";
const ContactForm = () => {
  const [messageData, setMessageData] = useState("");
  const submit = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/email",
        messageData
      );
      console.log(response);
      setMessageData("");
    } catch (err) {
      console.log(err);
    }
  };
  const messageHandler = (e) => {
    setMessageData(e.target.value);
  };
  console.log(messageData);
  return (
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
      <a href="#" onClick={submit} className="form__submit">
        Contact
      </a>
    </form>
  );
};
export default ContactForm;
