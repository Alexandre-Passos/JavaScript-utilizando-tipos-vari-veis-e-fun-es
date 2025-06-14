console.log(estudanteReprovou(7, 5))

function estudanteReprovou(notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return 'Reprovado'
    } else {
        return 'Aprovado'
    }
}


const exibirNomestudante = function (nome, idade) {
    return nome, idade
}
console.log(exibirNomestudante('Alexandre', 20))