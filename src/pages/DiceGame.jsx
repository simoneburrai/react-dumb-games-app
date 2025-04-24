import React from "react";
import { useState } from "react";
import RandomNumber from "../utils/RandomNumber";

const startButton = () => {
    const [userNumber, setUserNumber] = useState(null);
    const [consoleNumber, setConsoleNumber] = useState(null);
    const [result, setResult] = useState(null);

    const generateNumber = () => {
        const userNumberRandom = RandomNumber();
        const consoleNumberRandom = RandomNumber();

        setUserNumber(userNumberRandom);
        setConsoleNumber(consoleNumberRandom);

        if (userNumber > consoleNumber) {

            setResult("Hai vinto")

        } else if (consoleNumber > userNumber) {
            setResult("Hai perso")
        } else {
            setResult("Pareggio")
        }
    }
    return (

        <div>
            <div >
                <div >
                    <h2>Numero Player</h2>
                    <h4><strong>{userNumber}</strong></h4>
                </div>
                <div >
                    <h2>Numero Pc</h2>
                    <h4><strong>{consoleNumber}</strong></h4>
                </div>
            </div>
            <div>
                <div >
                    <button onClick={generateNumber}>
                        Genera Numero Casuale
                    </button>
                </div>

                <div>
                    <h2>{result}</h2>
                </div>
            </div>
        </div>

    )
}

export default startButton;