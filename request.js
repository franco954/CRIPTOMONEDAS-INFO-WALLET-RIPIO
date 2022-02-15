
const axios = require("axios");
const URL = "https://api.exchange.ripio.com/api/v1/balances/wallet_balances/";

// AGREGAR KEY DE TU CUENTA DE RIPIO
let keys = "";
let dat = "";



function ripio_request() {
    return new Promise(function (resolve, reject) {
      setTimeout( async () => {
        axios
          .get(URL, {
            headers: {
              Authorization: "Bearer " + keys,
              "Content-Type": "application/json; charset=utf-8",
            },
          })
          .then(function (response) {
            dat = response.data;
            return resolve(dat);
          })
          .catch(function (error) {
            return reject(error);
          });
      });
    });
  }



module.exports = ripio_request;