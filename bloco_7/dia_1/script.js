// Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
      
const testingScope = (escopo) => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(true);



// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".


const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenaNumeros = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;

    return oddsAndEvens;
}

const funcao = ordenaNumeros();

console.log(`Os números ${funcao} se encontram ordenados de forma crescente!`)

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numeroOrdenado = (array) => {
    const ordena = array.sort((a, b) => a - b);

    return ordena;
}

const arrayOrdenado = numeroOrdenado(oddsAndEvens);

console.log(`Os números ${arrayOrdenado} se encontram ordenados de forma crescente!`)


//Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = num => {
    let inicio = 1;

    for(let index = 2; index <= num; index += 1) {
        inicio = inicio * index;
    }
    return inicio;
}

console.log(fatorial(10));

//Crie uma função que receba uma frase e retorne qual a maior palavra.


const maiorPalavra = frase => {
    const separador = frase.split(' ');
    let menorNumero = 0;
    let resultado = '';

    for(let key of separador) {
        if (key.length > menorNumero) {
            menorNumero = key.length;
            resultado = key;
        }
    }
    return resultado;
}

console.log(maiorPalavra('Aquele que transfere o que sabe e aprende o que ensina.'));