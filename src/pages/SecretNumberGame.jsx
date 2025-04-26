import RandomNumber from "../utils/RandomNumber";
import React from "react";
import { useState } from "react";

const SecretNumber = () => {
    const [secretNumber, setSecretNumber] = useState(RandomNumber(100));
    const [user, setUser] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (event) => {
        setUser(event.target.value);
    };

    const handleUserSubmit = () => {

        if (!user) {
            setMessage("Inserisci un numero.");
            return;
        }

        const insNum = Number(user);

        if (isNaN(insNum) || insNum > 100 || insNum < 0) {
            setMessage("Inserisci un numero valido.");
            return;
        }

        if (insNum === secretNumber) {
            setMessage("Hai Vinto!!");

        } else if (insNum < secretNumber) {
            setMessage("Troppo basso");
        } else {
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
            <button onClick={handleUserSubmit}>
                Indovina
            </button>
            <p>{message}</p>
        </div>
    );
}

export default SecretNumber;