//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 5;
let linhas = '';
let caracter = '*';

for(index = 0; index < n; index += 1) {
    linhas += caracter;
};
for(index = 0; index < n; index += 1) {
    console.log(linhas);
};

//- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;
let linhas = '';
let caracter = '*';

for(let index = 0; index <= n; index += 1) {
    console.log(linhas);
    linhas += caracter;
};

// Agora inverta o lado do triângulo.

let n = 5;
let linhas = '';
let colunas = n;
let asterisco = '*';

for(let index = 0; index < 0; index += 1) {
    for(let indexColunas = 0; indexColunas <= n; indexColunas += 1) {
        if(indexColunas < colunas) {
            linhas += ' ';
        } else {
            linhas += asterisco;
        };
    };
    console.log(linhas);
    linhas = '';
    colunas -= 1;
}