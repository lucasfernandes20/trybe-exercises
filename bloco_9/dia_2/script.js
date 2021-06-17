const promise = new Promise((resolve, reject) => {
    const chance = Math.random();

    if (chance >= 0.5) {
        return reject(console.log(`Que fracasso =( Nosso número foi ${chance})`))
    }
    resolve(console.log(`Sucesso! nosso número foi ${chance}. =)`))
});