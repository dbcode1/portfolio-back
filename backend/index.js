const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;



app.post("/api/email", (req, res) => {
  res.send("Hello World!");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
