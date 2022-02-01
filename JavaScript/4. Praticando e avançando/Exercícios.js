// 1. Declare uma variável de nome Weight
let weight

// 2. Que tipo de dado é a variável acima?

console.log(typeof weight) // -> undefined

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        *name : String
        *age : Number(integer)
        *stars : Number(float)
        *isSubscribed : boolean

*/

let name = 'Erick'
let age = 22
let stars = 33.5
let isSubscribed = true
    


console.log(age)


/*
    4. A variável student abaixo é de que tipo de dado? -> Objeto

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight>kg

        Atenção, substitua <name> <age> <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    nome : 'Pedro',
    idade : 26,
    stars : 33.5,
    isSubscribed : true,
    weight : 80.5
}

console.log(`${student.nome} tem ${student.idade} de idade e pesa ${student.weight}kg`)


/*
    5. Declare uma variável do tipo Array, de nome 'estudantes' e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

const estudantes =[]

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto estudante da questao 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

console.log(students[0])

/*
    8. Crie um novo personagem e coloque na posição 1 do Array estudantes
*/

const erick = {
    name: 'Erick',
    age: 22,
    weight: 103.5,
    isSubscribed:true
}

student =[
    student,
    erick
]

console.log(estudantes[1])

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

//-> 'a' é undefined por conta que o JS fara o Hoisting, jogando o 'var a' lá pra cima, mas não o definirá em 1