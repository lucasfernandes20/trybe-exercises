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