const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "88ba88e6a8c591",
      pass: "910b0c8ac70365"
    }
  });

  const emailOptions = {
    from: options.from,
    to: options.to,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(emailOptions);
};

module.exports = sendEmail;
