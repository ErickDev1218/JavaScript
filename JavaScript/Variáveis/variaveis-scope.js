/* 
    Scope
    Determina a visibilidade de alguma variável no JS

    Primeiro vamos entender o #Block statement#
    Vamos iniciar o BLOCO
    { -> Abrindo o bloco
        Dentro do bloco posso colocar qualquer código
    } -> Fechando o bloco
*/

{
    let x = 0
    console.log(x)
}


/*
    O 'var' é GLOBAL e poderá funcionar fora de um escopo(bloco)
    
    O JS ler o código de maneira vertical, de cima pra baixo, sendo assim, a 'var x=0' só foi DEFINIDA na linha 12 e DENTRO do block, logo, a linha 9 mantém x como INDEFINIDO. -> o 'var' é GLOBAL e também LOCAL, causando o chamado 'hoisting'
*/

console.log ('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x depois do block? ', x)


/*
    O 'let' e 'const' são LOCAIS e só funcionam no SCOPE ONDE FORAM CRIADAS. NUNCA haverá hoisting.

    Lembrando sempre que o JS ler o código de FORMA VERTICAL.
*/
    
    let y = 15

{
    let y = 1
    console.log('> Y é igual a', y)
}

console.log('> Y é igual a ',y)



/*
    Caso eu escreva o seguinte código:
     let y = 15

{
    !(OLHE AQUI)! y = 1
    console.log('> Y é igual a', y)
}

    console.log('> Y é igual a ',y)

    Desta forma, sem o 'let' dentro do scope, fará com que o JS procure a variável Y, independente de onde esteja e o atualize no esquema de 'timeline'.
    Nota que o 'const' não irá funcionar no esquema de 'timeline'
*/