import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPaper, faHandScissors, faHandRock } from '@fortawesome/free-solid-svg-icons';
import startSound from '../assets/audios/start.mp3'
import Winning from "../components/Winning";
import Losing from "../components/Losing";
import { useGameResult } from "../contexts/GameResultContext";
import Tying from "../components/Tying";

const choices = [
    { name: "Carta", icon: faHandPaper },
    { name: "Forbice", icon: faHandScissors },
    { name: "Sasso", icon: faHandRock }
];


//logica risultato


const PaperScissorRock = () => {
    const { setHasWon, setHasTie, setHasLost } = useGameResult();

    function getResult(user, computer) {
        if (user === computer) {
            setHasTie(true);
            return <Tying />
        }
        if (
            (user === "Carta" && computer === "Sasso") ||
            (user === "Forbice" && computer === "Carta") ||
            (user === "Sasso" && computer === "Forbice")
        ) {
            setHasWon(true);
            return <Winning />;
        }
        setHasLost(true);
        return <Losing />;
    }

    const [userChoice, setUserChoice] = useState("");
    const [computerChoice, setComputerChoice] = useState("");
    const [result, setResult] = useState(null);

    const handleClick = (choiceName) => {
        new Audio(startSound).play();
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        const gameResult = getResult(choiceName, randomChoice.name);

        setUserChoice(choiceName);
        setComputerChoice(randomChoice.name);
        setResult(gameResult);
    };

    return (
        <div className="paper-scissor-rock">
            <h1>Carta, Forbice, Sasso</h1>
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
                    {result && result}
                </div>
            )}
        </div>
    );
};

export default PaperScissorRock;