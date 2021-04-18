var valorEmRealTexto = prompt ("Qual o valor em R$ que você converter para 人民币 chinês?")

var valorEmRealNumero = parseFloat(valorEmRealTexto)


var valorEmReal  = valorEmRealTexto *1.16
var valoEmRealFixado = valorEmReal.toFixed(2)

alert (valoEmRealFixado)

//