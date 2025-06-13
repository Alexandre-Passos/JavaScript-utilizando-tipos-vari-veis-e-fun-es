const notaPrimeiroBimestre = 9
const notaSegundoBimestre = 8.5
const notaTerceiroBimestre = -1
const notaQuartoBimestre = parseInt('9')

console.log(typeof notaQuartoBimestre, notaQuartoBimestre)
const media = Number((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4).toFixed(1)


if(media >= 7){
console.log('A média final é: ',media+= media)
}else{
    console.log('A média final é: ',media, 'reprovado')
}

