import RandomNumber from "../utils/RandomNumber";
import React from "react";
import { useState } from "react";
import startSound from '../assets/audios/start.mp3'
import errorSound from '../assets/audios/error.mp3'

const SecretNumber = () => {
    const [secretNumber, setSecretNumber] = useState(RandomNumber(100));
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        setUser(event.target.value);
    };

    const handleUserSubmit = () => {


        if (!user) {
            new Audio(errorSound).play();
            setMessage("Inserisci un numero.");
            return;
        }

        const insNum = Number(user);

        if (isNaN(insNum) || insNum > 100 || insNum < 0) {
            new Audio(errorSound).play();
            setMessage("Inserisci un numero valido.");
            return;
        }

        if (insNum === secretNumber) {
            new Audio(startSound).play();
            setMessage("Hai Vinto!!");

        } else if (insNum < secretNumber) {
            new Audio(startSound).play();
            setMessage("Troppo basso");
        } else {
            new Audio(startSound).play();
            setMessage("Troppo alto");
        }

        setUser("");
    };

    return (
        <div>
            <h1>Indovina il Numero</h1>
            <p>Prova a indovinare un numero tra 1 e 100.</p>
            <input
                type="number"
                value={user}
                onChange={handleInputChange}
            />
            <button className="btn btn-dark mx-4" onClick={handleUserSubmit}>
                Indovina
            </button>
            <p>{message}</p>
        </div>
    );
}

export default SecretNumber;