const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8fcc9014e26b68",
      pass: "29aff0afb6bd5b",
    },
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
