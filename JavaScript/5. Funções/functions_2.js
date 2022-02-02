/*
// Function expression ou function anonymous

// Parâmetros
const sum = function(number1, number2){
    console.log(number1 + number2)
    
}
// sum(number1, number2) // Argumentos

let total = 0

const sum = function (number1, number2) {
    let total = number1 + number2
    return total
} // Toda função retorna alguma coisa

let number1 = 34
let number2 = 25

//console.log(`O número 1 é ${number1}`)
//console.log(`O número 2 é ${number2}`)

console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)*/

// Função é um liquidificador 

function fazerSuco(fruta1, fruta2) {
    return fruta1+fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)


