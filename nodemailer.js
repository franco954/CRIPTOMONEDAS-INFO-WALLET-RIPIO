const nodemailer = require("nodemailer");
const moment = require("moment");



// fs.readFile("utilities/to.txt", function (err, data) {
//   if (!err) {
//     toEmail = data.toString().trim();
//   }
// });


// fs.readFile("utilities/from.txt", function (err, data) {
//   if (!err) {
//     let txtfrom = data.toString().trim();
//     fromEmail = txtfrom.split([","]);
//   }
// });

async function send(html) {
  let time = moment();
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.TO,
        subject: `Ripio Update ${time.format("DD/MM/YYYY - HH:MM:SS")}`,
        html: html,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        error ? reject(false) : resolve(true);
      });
    });
  });
}

module.exports = send;
