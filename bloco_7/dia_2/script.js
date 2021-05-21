const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const name = order.name;
    const telefone = order.phoneNumber;
    const endereco = order.address.street;
    const houseNumber = order.address.number;
    const apartamento = order.address.apartment;

    return(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${telefone}, R. ${endereco}, Nº: ${houseNumber}, AP: ${apartamento}.`)
  
  }
  customerInfo(order);
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
    order.order.delivery.deliveryPerson = 'Luiz Silva'
    order.payment.total = '50,00';

    return(`Olá ${order.order.delivery.deliveryPerson}, o total do seu pedido de muzzarela, calabresa e ${order.order.drinks.coke.type} é R$ ${order.payment.total}.`)
    
  }
  
  orderModifier(order);
  console.log(orderModifier(order));


//   Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

  const addEntry = (objeto, chave, valor) => {
      objeto[chave] = valor;
  }
  addEntry(lesson2, 'turno', 'manhã');
  console.log(lesson2);

//   Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (objeto) => Object.keys(objeto);

console.log(listKeys(lesson2));

// /Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (obj) => Object.keys(obj).length;

console.log(objectLength(lesson2));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValue = (obj) => Object.values(obj);

console.log(listValue(lesson2));

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
console.log(allLessons);

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudantes = (obj) => {
    let estudantes = 0;
    const chaves = Object.keys(obj);
    for(let key in chaves) {
        estudantes = estudantes + obj[chaves[key]].numeroEstudantes;
    }
    return estudantes;
}
console.log(totalEstudantes(allLessons));

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const chaveValue = (obj, num) => Object.values(obj)[num];

console.log(chaveValue(lesson2, 2));

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

const verificaPar = (obj, chave, valor) => {
    const entradas = Object.entries(obj);
    let result = false;

    for (let key in entradas) {
        if (entradas[key][0] === chave && entradas[key][1] === valor) result = true;
    }
    return result;
}
console.log(verificaPar(lesson3, 'materia', 'Matemática'));