
require('dotenv').config()

const ripio_request = require("./request");
const forToken = require("./tokensFor");
const scrapping = require("./webScrapping");









ripio_request().then((dat) => {
  forToken(dat).then((balances) =>
    scrapping(balances)
  );
});
