function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

//   O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
// Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function geraDias(){
  let listaDias = document.querySelector('#days');
  
  for(let index = 0; index < dezDaysList.length; index += 1){
    let dias = dezDaysList[index];
    let itemDia = document.createElement('li');

    if(dias === 24 || dias === 31){
      itemDia.className = 'day holiday';
      itemDia.innerHTML = dias;
      listaDias.appendChild(itemDia);
    } else if(dias === 25){
      itemDia.className = 'day holiday friday';
      itemDia.innerHTML = dias;
      listaDias.appendChild(itemDia);
    } else if(dias === 4 | dias === 11 | dias === 18){
      itemDia.className = 'day friday';
      itemDia.innerHTML = dias;
      listaDias.appendChild(itemDia);
    } else {
      itemDia.className = 'day';
      itemDia.innerHTML = dias;
      listaDias.appendChild(itemDia);
    };
  };
};
geraDias();

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

function holidaybuttom(nomeBotao) {
  let localBotao = document.querySelector('.buttons-container');
  let botao = document.createElement('button');
  botao.innerHTML = nomeBotao;
  botao.id = 'btn-holiday';
  localBotao.appendChild(botao);
};
holidaybuttom('Feriados');


// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .


function holidayBackgroundChanger() {
  let localBotaoFeriado = document.querySelector('#btn-holiday');
  let diasFeriados = document.querySelectorAll('.holiday');
  let corDeFundo = 'rgb(238,238,238)';
  let corDeFundoModificada = 'white';

  localBotaoFeriado.addEventListener('click', function() {
    for(let index = 0; index < diasFeriados.length; index += 1) {
      if (diasFeriados[index].style.backgroundColor === corDeFundoModificada) {
        diasFeriados[index].style.backgroundColor = corDeFundo;
      } else {
        diasFeriados[index].style.backgroundColor = corDeFundoModificada;
      };
    };
  })
};
holidayBackgroundChanger();






