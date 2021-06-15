//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

let a = 10;
let b = 25;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let divisao = a / b;
console.log(divisao);

let multiplicacao = a * b;
console.log(multiplicacao);

let modulo = a % b;
console.log(modulo);


//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let num1 = 4;
let num2 = 9;

if(num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}


//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

let num1 = 12;
let num2 = 2;
let num3 = 14;

if(num1 > num2 && num1 > num3) {
    console.log(num1);
} else if(num2 > num3 && num2 > num1) {
    console.log(num2);
} else if(num3 > num1 && num3 > num2) {
    console.log(num3);
}


//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let positiveOrNegative = 0;

if(positiveOrNegative > 0) {
    console.log('Positive');
} else if(positiveOrNegative < 0) {
    console.log('negative');
} else {
    console.log('zero');
}


//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angulo1 = 60;
let angulo2 = 80;
let angulo3 = 40;

if(angulo1 + angulo2 + angulo3 == 180) {
    console.log(true);
} else if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
    console.log('Ângulo inválido');
} else {
    console.log(false);
}


//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let chess = 'dama';
let chessMinusculas = chess.toLowerCase();

switch(chessMinusculas) {
    case 'rei':
        console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez');
        break;
    
    case 'dama':
        console.log('Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.')
        break;
    
    case 'torre':
        console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
        break;

    case 'bispo':
        console.log('Pode se mover verticalmente quantas casas quiser');
        break;

    case 'cavalo':
        console.log('Move-se em forma de um "L" para qualquer direção seguindo esta regra');
        break;

    case 'peão':
        console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
        break;
}



//escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 65;

if (nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');
} else if (nota >= 60) {
    console.log('D');
} else if (nota >= 50) {
    console.log('E');
} else if (nota < 50) {
    console.log('F');
} else {
    console.log('Nota inválida');
}


//Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let num1 = 2;
let num2 = 5;
let num3 = 9;

if(num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}


//Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let num1 = 2;
let num2 = 5;
let num3 = 10;

if(num1 % 2 == 1 || num2 % 2 == 1 || num3 % 2 == 1) {
    console.log(true);
} else {
    console.log(false);
}



//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
//valorCustoTotal = valorCusto + impostoSobreOCusto
//lucro = valorVenda - valorCustoTotal (lucro de um produto)

let valorCusto = 200;
let valorVenda = 360;
let valorCustoTotal = valorCusto * 1.2;
let lucro = valorVenda - valorCustoTotal;
let lucroPosMilVendas = lucro * 1000;

if (valorCusto < 0 || valorVenda < 0 ) {
    console.log('Valor Inválido!');
} else {
    console.log(lucroPosMilVendas);
}


//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000;
let salarioLiquido = 0;

if(salarioBruto <= 1556.94) {
    salarioLiquido = salarioBruto * 0.92;
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioLiquido = salarioBruto * 0.91;
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioLiquido = salarioBruto * 0.89;
} else {
    salarioLiquido = salarioBruto - 570.88;
}

let alicota1 = ((salarioLiquido * 0.075) - 142.8);
let alicota2 = ((salarioLiquido * 0.15) - 354.8);
let alicota3 = ((salarioLiquido * 0.225) - 636.13);
let alicota4 = ((salarioLiquido * 0.275) - 869.36);

if(salarioLiquido < 1903.98) {
    salarioLiquido = salarioLiquido;
} else if(salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
    salarioLiquido = salarioLiquido - alicota1;
} else if(salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
    salarioLiquido = salarioLiquido - alicota2;
} else if(salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
    salarioLiquido = salarioLiquido - alicota3;
} else {
    salarioLiquido = salarioLiquido - alicota4;
}
console.log(salarioLiquido);