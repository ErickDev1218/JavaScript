//Array
//ATENÇÃO NA SINTAXE

const animals = [
    'Lion', //0
    'Monkey', //1
    'Cat' //2
]

//Acessando valores dentro da array pegando a POSIÇÃO do array

console.log(animals[0])

//Accesando OBJETOS dentro do array

const animals = [
    'Lion', 
    'Monkey', 
    {
       name : 'Cat', 
       age : 3
    }  
]

console.log(animals[2].name)