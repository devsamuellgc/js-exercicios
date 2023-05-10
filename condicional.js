/**
 * Faça um programa que peça dois números e exiba na tela qual é o maior.
 * Faça um programa que peça ao usuário um número e exiba na tela se ele é 
   positivo, negativo ou zero.
 * Faça um programa que peça a idade do usuário e exiba na tela se ele é 
   maior de idade ou não.
 * Faça um programa que peça ao usuário um número e exiba na tela se 
   ele é par ou ímpar.
 * Faça um programa que peça ao usuário uma nota de 0 a 10 e exiba na tela 
   se ele foi aprovado (nota maior ou igual a 6) ou reprovado (nota menor que 6).
 */

function maiorNumero(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} é maior`)
    } else {
        console.log(`${num2} é maior`)
    }
}
maiorNumero(15, 25)
// function maiorNumero() {
//     if (10 > 5) {
//         console.log(`${10} é maior`)
//     } else {
//         console.log(`${5} é maior`)
//     }
// }

// maiorNumero()

function imparOuPar(num) {
    if (num % 2 === 0) {
        console.log(`${num} é par`)
    } else {
        console.log(`${num} é ímpar`)
    }
}

function valorDoNumero(num) {
    if (num === 0) {
        console.log(`${num} é zero`)
    } else if (num % 2 === 0) {
        console.log(`${num} é par`)
    } else {
        console.log(`${num} é ímpar`)
    }
}

function validarMaiorIdade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

function validarNota(nota) {
    if (nota > 10 || nota < 0) {
        console.log('Valor inválido')
    } else if (nota >= 6) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

