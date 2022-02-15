const send = require("./nodemailer");


let htmlEmail = ``;
let accountB = '';
let arrayCant = []





exports.addSaldos = async function (balancesAccount){

    if (accountB == ''){
        accountB = balancesAccount
        for (let i = 0; i < accountB.length; i++) {
            const e = accountB[i];
            arrayCant.push(e)
        }
    }
}




exports.addPrecios = async function (objP){

    let valTotal = 0;

    htmlEmail +=  
    `<table>
    <tr>
        <th>Moneda</th>
        <th>Compra</th>
        <th>Venta</th>
        <th>Cantidad</th>
        <th>Valor ARS</th>
    </tr>`
    for (let i = 0; i < objP.length; i++) {
        const tk = objP[i];
        const tkC = arrayCant[i]
        const strV = (tk.Venta).toString()
        const newStrV = strV.slice(1)
        const val = Number(newStrV) * tkC
        valTotal += val;
        console.log(valTotal)
        if(tkC.toFixed(0) != 0){
            htmlEmail += 
            `
                <tr>
                    <td><b>${tk.Token}</b></td>
                    <td>${tk.Compra}</td>
                    <td>${tk.Venta}</td>
                    <td>${tkC.toFixed(1)}</td>
                    <td>$${val.toFixed(1)}</td>
                </tr>
           `
        }
    }
    htmlEmail += `
        <hr>
        <tr>
                <td><b>TOTAL</b></td>
                <td></td>
                <td></td>
                <td></td>
                <td>$${valTotal.toFixed(1)}</td>
        </tr>
    </table>`

    send(htmlEmail)


}





