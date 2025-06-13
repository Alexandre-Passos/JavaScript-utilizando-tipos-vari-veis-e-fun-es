const notaPrimeiroBimestre = 9
const notaSegundoBimestre = 8.5
const notaTerceiroBimestre = -1
const notaQuartoBimestre = parseInt('9')

console.log(typeof notaQuartoBimestre, notaQuartoBimestre)
const total = Number(notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre)

console.log('A média final é: ',total.toFixed(1))