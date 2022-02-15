

const {addSaldos} = require('./data')

async function forToken(datos) {

            let str = []
            let balances = []

            for (let i = 0; i < datos.length; i++) {
              const dt = datos[i];
              if (!dt.available == 0) {
                const sym = dt.symbol
                const strT = "'" + sym + " row'"
                const strB = dt.available
                str.push(strT)
                balances.push(strB)
              }
            }
            addSaldos(balances)
            return str;

}

module.exports = forToken;