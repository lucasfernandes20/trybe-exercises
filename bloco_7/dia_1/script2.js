const paiDoBotao = document.getElementById('contagem');
const criaBotao = document.createElement('button');
criaBotao.innerText = 'Click Here';
criaBotao.className = 'click-button';
paiDoBotao.appendChild(criaBotao)


const botao = document.getElementsByClassName('click-button')[0];
let placar = document.getElementById('placar');
let clickCount = 0;
botao.addEventListener('click', () => placar.innerHTML = clickCount += 1);
