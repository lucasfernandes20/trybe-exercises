const wakeUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar um café!!';

const goSleep = () => 'Partiu dormir!!';

const doingThings = (func) => {
    const saida = func();
    console.log(saida);
}
doingThings(wakeUp);

//exercises:

const pessoaContratada = (nome) => {
    const email = nome.toLowerCase().split(' ').join('_');
    return { nome, email: `${email}@trybe.com`};
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'),
      id2: callback('Luiza Drumond'),
      id3: callback('Carla Paiva'),
    }
    return employees;
};
console.log(newEmployees(pessoaContratada));

//2:

const checaNum = (num, numLoteria) => num === numLoteria;

const loteria = (num, callback) => {
    const numLoteria = Math.ceil((Math.random() * 5) + 1);

    if (callback(num, numLoteria) === true) {
        return 'Parabéns você ganhou!';
    } else {
        return 'Tente novamente!';
    };
};
console.log(loteria(5, checaNum));

//3:

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const analise = (respostaCorreta, respostaAluno, checker) => {
    let nota = 0;
    for(let index = 0; index < respostaCorreta.length; index += 1) {
        const retornoNota = checker(respostaCorreta[index], respostaAluno[index]);
        nota += retornoNota;
    };
    return `Acertou ${nota}`;
}

console.log(analise(rightAnswers, studentAnswers, (respostaCerta, aluno) => {
    if(respostaCerta === aluno) {
        return 1;
    }
    if (aluno === 'N.A') {
        return 0;
    }
    return -0.5;
}))