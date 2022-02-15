const nodemailer = require("nodemailer");
const moment = require("moment");
const fs = require("fs");

let fromEmail = "";
let toEmail = "";


// QUIEN ENVIA
fs.readFile("utilities/to.txt", function (err, data) {
  if (!err) {
    toEmail = data.toString().trim();
  }
});

// QUIEN RECIBE
fs.readFile("utilities/from.txt", function (err, data) {
  if (!err) {
    let txtfrom = data.toString().trim();
    fromEmail = txtfrom.split([","]);
  }
});

async function send(html) {
  let time = moment();
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: fromEmail[0],
          pass: fromEmail[1],
        },
      });
      const mailOptions = {
        from: fromEmail[0],
        to: toEmail,
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
