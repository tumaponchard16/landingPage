const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  const htmlEmail = `
  <h3>Contact Details</h3>
  <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.number}</li>
      <li>Zip Code: ${req.body.address}</li>
  <ul>
  `;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "<email_here>",
      pass: "<password_here>"
    }
  });

  let mailOptions = {
    from: req.body.email, // sender address
    to: "<email_here>", // list of receivers
    subject: "New Message", // Subject line
    email: req.body.email, // plain text body
    html: htmlEmail // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({ msg: "fail" });
      console.log("error");
    } else {
      res.json({ msg: "success" });
      console.log("success");
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
