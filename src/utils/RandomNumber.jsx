const RandomNumber = (max) => {
    const numeroCasuale = Math.floor(Math.random() * max);
    return numeroCasuale;
};

export default RandomNumber;