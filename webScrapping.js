

const { chromium } = require("playwright");
const URL = "https://www.ripio.com/ar/criptomonedas/cotizacion/";
const {addPrecios} = require('./data')
let page;
let browser;
// (async () => {
//     browser = await chromium.launch();
//     page = await browser.newPage();
//     await page.goto(URL);
// })();




async function scrapping(tokens){

            let array = []          
            for (let i = 0; i < tokens.length; i++) {
                const t = tokens[i];
                const tInfo = await browsers(t)
                if(tInfo != undefined){
        
                    tInfo.pop()
                    let newToken = (tInfo.toString()).split(')')
                    let nameToken = (newToken[0].replace(/,/g, ' ').concat(')'))
                    // let numberToken = (newToken[1].replace(/,/g, ' '))
                    let numberToken = newToken[1].split(',')
                
                
                    let objeto = {
                        'Token': nameToken,
                        'Compra': numberToken[1],
                        'Venta': numberToken[2],
                        'Variación': numberToken[3],
                    }    
                    
                    array.push(objeto)
            
                }
                
            }
            precios(array)
}




async function browsers(sym){
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(URL);
    const content = await page.textContent("[class=" + sym + "]");
    const contentReduce = (content.trim()).replace(/\s+/g, ',')
    const tokenI = contentReduce.split(",", 8);
    browser.close()
    return tokenI;
}





async function precios(cot) {

    addPrecios(cot)


}







module.exports = scrapping;