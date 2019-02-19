function Dolar(connection) {
    this._connection = connection;
}

Dolar.prototype.CalcularValorReal = function (data) {
    var dolarPtax = parseFloat(data.dolarPtax.replace(",", "."));
    var dolar = parseFloat(data.dolar.replace(",", "."));
    var spread = data.spread.replace(",", ".");
    var iof = parseFloat(data.iof.replace(",", "."));
    var real = parseFloat(data.real.replace(",", "."));
    var resultado = ((dolar * (spread/100)) + dolar) * dolarPtax;
    resultado = (resultado * (iof/100)) + resultado;
    console.log(resultado.toFixed(2));

};

module.exports = function () {
    return Dolar;
}