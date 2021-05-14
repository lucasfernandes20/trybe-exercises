function populaListaDeEstado(){
    let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

    const paiDasOpcoes = document.getElementById('estados-1');
    for(let index = 0; index < estados.length; index += 1) {
        const criarOption = document.createElement('option');
        paiDasOpcoes.appendChild(criarOption).innerHTML = estados[index];
        paiDasOpcoes.appendChild(criarOption).value = estados[index];
    }
}

window.onload = function() {
    populaListaDeEstado();
}