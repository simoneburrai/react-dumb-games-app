import RandomNumber from "../utils/RandomNumber";
import React from "react";
import { useState } from "react";
import startSound from '../assets/audios/start.mp3'
import errorSound from '../assets/audios/error.mp3'
import Winning from '../components/Winning'
import { useGameResult } from "../contexts/GameResultContext";

const SecretNumber = () => {


    const { setHasWon, volume } = useGameResult();
    const [secretNumber, setSecretNumber] = useState(RandomNumber(100));
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");
    const errorAudio = new Audio(errorSound);
    const startAudio = new Audio(startSound);

    const handleInputChange = (event) => {
        setUser(event.target.value);
    };

    const handleUserSubmit = () => {


        if (!user) {
            if (volume) {
                errorAudio.play();
            }
            setMessage("Inserisci un numero.");
            return;
        }

        const insNum = Number(user);

        if (isNaN(insNum) || insNum > 100 || insNum < 1) {
            if (volume) {
                errorAudio.play();
            }
            setMessage("Inserisci un numero valido.");
            return;
        }

        if (insNum === secretNumber) {
            if (volume) {
                startAudio.play();
            }
            setHasWon(true);
            setMessage(<Winning />);

        } else if (insNum < secretNumber) {
            if (volume) {
                startAudio.play();
            }
            setMessage("Troppo basso");
        } else {
            if (volume) {
                startAudio.play();
            }
            setMessage("Troppo alto");
        }

        setUser("");
    };

    return (
        <div>
            <h1 className="text-warning">Indovina il Numero</h1>
            <p className="text-warning">Prova a indovinare un numero tra 1 e 100.</p>
            <input
                type="number"
                value={user}
                onChange={handleInputChange}
            />
            <button className="btn btn-dark mx-4 text-warning" onClick={handleUserSubmit}>
                Indovina
            </button>
            {message}
        </div>
    );
}

export default SecretNumber;