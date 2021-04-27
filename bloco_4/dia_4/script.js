//Crie um objeto player contendo as variáveis listadas abaixo.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

//Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

//Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

//Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

//Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// Usando o objeto abaixo, utilize For/in e imprima um console log 'Olá xxxxx' para cada nome no objeto.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  }

  for(let index in names) {
      console.log('Olá ' + names[index]);
  }

  //Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e seu valor 'modelo: A3 Sedan, marca: Audi, ano:2020' .

  let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }

  for(let index in carro) {
      console.log(index, ':', carro[index]);
  }

  //Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:

  function soma(a, b) {
      return a + b;
  }

  function subtracao(a, b) {
      return a - b;
  }

  function divisao(a, b) {
      return a / b;
  }

  function multiplicacao(a, b) {
      return a * b;
  }

  function modulo(a, b) {
      return a % b;
  }

  //Faça um programa que retorne o maior de dois números. 
  function maiorNumero(a, b) {
      if (a > b) {
          return a;
      } else {
          return b;
      }
  }

  //Faça um programa que retorne o maior de três números. 

  function maiorNumero(a, b, c) {
      if (a > b && a > c) {
          return a;
      } else if (b > a && b > c) {
          return b;
      } else {
          return c;
      }
  }



  //Usando o objeto abaixo, faça os exercícios a seguir:

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
//   Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

console.log('Boas vindas, ' + info.personagem + '!');

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = 'Sim';

console.log(info);

// Faça um for/in que mostre todas as chaves do objeto.

for(let key in info) {
    console.log(key);
}

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

for(let key in info) {
    console.log(info[key]);
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente:'Sim',
  };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for(let key in info) {
      if(info[key] === info.recorrente &&
        info[key] === 'Sim' &&
        info2[key] === 'Sim') {
          console.log('Ambos recorrentes');
      } else {
          console.log(info[key] + ' e ' + info2[key]);
      }
  }



// -----------------Parte II - Funções--------------------------

// Exercício 1
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function verificaPalindrome(word) {
    let palavraInvertida = word.split('').reverse().join('');
    if(palavraInvertida === word) {
        return true;
    } else {
        return false;
    }
}

console.log(verificaPalindrome('socorrammesubinoonibusemmarrocos'));


// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .


function indiceMaiorValor(array) {
    let maiorIndice = 0;
    for(let key in array) {
        if(array[maiorIndice] < array[key]) {
            maiorIndice = key;
        }
    }
    return maiorIndice;
}
console.log(indiceMaiorValor([2, 3, 6, 79, 101, 1]));


// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceMenorValor(array){
    let menorIndice = 0;
    for(let key in array) {
        if(array[menorIndice] > array[key]) {
            menorIndice = key;
        }
    }
    return menorIndice;
}
console.log(indiceMenorValor([23, 2, -45, 3, -10, 3]));

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(nomes) {
    nomeMaior = nomes[0];
    for(let key in nomes) {
        if(nomeMaior.length < nomes[key].length){
            nomeMaior = nomes[key];
        }
    }
    return nomeMaior;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))



//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaDosNumeros(numero){
    let resultado = 0;
    for(let index = 1; index <= numero; index += 1) {
        resultado = resultado + index;
    }
    return resultado;
}
console.log(somaDosNumeros(10));
