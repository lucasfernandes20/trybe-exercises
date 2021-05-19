//Exercicio 1: Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);



//Exercicio 2: Procure o índice do valor "Portfólio" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu[2];

console.log(indexOfPortfolio);


//Exercicio 3: Adicione o valor "Contato" no final do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');

console.log(menu);



//Exercicio 4: Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (var index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}



//Exercicio 5: Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nome of names) {
    console.log(nome);
}


// ----------------------EXERCICIOS DA ÚLTIMA PARTE DO DIA 4.2 --------------------


//Exercicio 1:Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numeros of numbers) {
    console.log(numeros);
}


//Exercicio 2:Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let numeros of numbers) {
    soma = soma + numeros
}
console.log(soma);


//Exercicio 3:Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let numeros of numbers) {
    soma = soma + numeros
}
media = soma / 10;
console.log(media);


//Exercicio 4:Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0;

for (let numeros of numbers) {
    soma = soma + numeros
}
media = soma / 10;

if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

//Exercicio 5:Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let numeros of numbers) {
    if (numeros > maior) {
        maior = numeros;
    } else {
        maior = maior;
    }
}
console.log(maior);


//Exercicio 6:Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let numeros of numbers) {
    if (numeros % 2 >= 1) {
        impar += 1;
    }
}
if (impar == 0) {
    console.log('Nenhum valor ímpar encontrado')
} else {
    let mensagem = 'O Array tem ' + impar + ' números impares!'
    console.log(mensagem);
}

//Exercicio 7: Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];

for (let numeros of numbers) {
    if (numeros < menor) {
        menor = numeros;
    } else {
        menor = menor
    }
}
console.log(menor);

//Exercicio 8: Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let arrayResultado = [];

for (index = 1; index <= 25; index += 1) {
    arrayResultado.push(index);
}
console.log(arrayResultado);

//Exercicio 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let arrayResultado = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
let resultadoDivisao = [];   

for (index = 0; index < arrayResultado.length; index += 1) {
    resultadoDivisao.push((arrayResultado[index]) / 2);
}
console.log(resultadoDivisao);