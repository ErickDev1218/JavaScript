/* 
String
    *Cadeia de caracteres
    "" aspas duplas
    '' aspas simples
    `` template literals ou template strings
*/

console.log("Bem vindo")
console.log('Bem vindo')
console.log(`Bem vindo`) // me permite usar ${} e quebra de linhas


/*
Number
    *números

    33 -> inteiros
    12.5 -> reais / float
    NaN - > Not a Number
    Infinity - > infinito. ATT: SEMPRE usar escrito da forma correta "Infinity"
*/

console.log(33)
console.log(12.5)
console.log(33 / "Brasil") // Resulta em NaN
console.log(Infinity)


/* 
Boolean
    *somente 2 valores

    True -> Verdadeiro
    False -> Falso
*/

console.log(true)

/*
    *undefined
    indefinido

    *null
    nulo
    objeto que não possui nada dentro
    diferente de indefinido
*/


/*
    *Object
    Objeto
    Propriedades / Atributos
    Funcionalidades / Métodos

    { propriedade: "valor" }

*/

console.log({
    name:"Erick",
    idade: 22,
    andar: function() {
        console.log('andar')
    }
})

/*
    *Array (Vetores)
    Uma lista
    Agrupamento de dados
    ["Erick", 22]
*/

console.log([
    "Erick",
    22,
    "Programação"
])