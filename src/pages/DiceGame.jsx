import React, { useEffect } from "react";
import { useState } from "react";
import RandomNumber from "../utils/RandomNumber";

const DiceGame = () => {
    const [userNumber, setUserNumber] = useState(null);
    const [consoleNumber, setConsoleNumber] = useState(null);
    const [result, setResult] = useState(null);

    const generateNumber = () => {
        const userNumberRandom = RandomNumber();
        const consoleNumberRandom = RandomNumber();

        setUserNumber(userNumberRandom);
        setConsoleNumber(consoleNumberRandom);
    }

    useEffect(() => {
        if (userNumber > consoleNumber) {

            setResult("Hai vinto")

        } else if (userNumber < consoleNumber) {
            setResult("Hai perso")
        } else if (userNumber === consoleNumber) {
            setResult("Pareggio")
        }
    }, [userNumber, consoleNumber])


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

export default DiceGame;