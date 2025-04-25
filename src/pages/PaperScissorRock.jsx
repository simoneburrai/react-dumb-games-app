import React, { useState } from "react";

const choices = ["Carta", "Forbice", "Sasso"];

//logica risultato

function getResult(user, computer) {
    if (user === computer) return "Pareggio";
    if (
        (user === "Carta" && computer === "Sasso") ||
        (user === "Forbice" && computer === "Carta") ||
        (user === "Sasso" && computer === "Forbice")
    ) {
        return "Hai vinto!";
    }
    return "Hai perso!";
}

const PaperScissorRock = () => {
    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState("");

    const handleClick = (choice) => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        const gameResult = getResult(choice, randomChoice);

        setUserChoice(choice);
        setComputerChoice(randomChoice);
        setResult(gameResult);

    };

    return (
        <div>
            <h2>Carta, Forbice, Sasso</h2>

            <div>
                {choices.map((choice) => (
                    <button key={choice} onClick={() => handleClick(choice)}>
                        {choice}
                    </button>
                ))}
            </div>
            {result && (
                <div>
                    <p>Hai scelto: {userChoice}</p>
                    <p>Il computer ha scelto: {computerChoice}</p>
                    <p>Risultato: {result}</p>
                </div>
            )}
        </div>
    );
};

export default PaperScissorRock;
