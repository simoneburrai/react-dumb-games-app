import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faHandScissors, faHandRock } from '@fortawesome/free-solid-svg-icons';

const choices = [
    { name: "Carta", icon: faHandPaper },
    { name: "Forbice", icon: faHandScissors },
    { name: "Sasso", icon: faHandRock }
];

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

    const handleClick = (choiceName) => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        const gameResult = getResult(choiceName, randomChoice.name);

        setUserChoice(choiceName);
        setComputerChoice(randomChoice.name);
        setResult(gameResult);
    };

    return (
        <div>
            <h2>Carta, Forbice, Sasso</h2>

            <div>
                {choices.map((choice) => (
                    <button className="btn btn-dark me-2 fs-1 p-4" key={choice.name} onClick={() => handleClick(choice.name)}>
                        <FontAwesomeIcon icon={choice.icon} />
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