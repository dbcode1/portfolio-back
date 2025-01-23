var express = require("express");
const nodemailer = require("nodemailer");
var router = express.Router();
require("dotenv").config();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/api/email", async (req, res) => {
  const { messageData, email } = req.body;
  console.log(messageData);
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dmbrusky@gmail.com",
        pass: `${process.env.GOOGLE_PASSWORD}`,
      },
    });

    const mailOptions = {
      from: "dmbrusky@gmail.com",
      to: "dmbrusky@gmail.com",
      subject: `New message from dan`,
      // text: `${messageData}\n\nFrom: ${email}`,

      text: `${messageData}\n\nFrom:`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
});

module.exports = router;
