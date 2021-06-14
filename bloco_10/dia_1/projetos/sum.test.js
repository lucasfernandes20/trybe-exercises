const sum = require('./script.js');

describe('Soma de dois números', () => {
    it('Retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('Retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('Lança um erro se os parametros forem sum(4, "5")', () => {
        expect(() => {
            sum(4, '5');
        }).toThrow('parameters must be numbers');
    })
});
