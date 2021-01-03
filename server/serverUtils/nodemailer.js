const nodemailer = require("nodemailer");

const createTransport = (mailOptions, callback) => {
  const transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST || "smtp.mailtrap.io",
    port: Number(process.env.MAILER_PORT) || 2525,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });

  //GMAIL TRANSPORT
  // const transport = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.MAILER_USER,
  //     pass: process.env.MAILER_PASS,
  //   },
  // });

  transport.sendMail(mailOptions, callback);
};

module.exports = createTransport;
