import React, { useEffect } from "react";
import { useState } from "react";
import RandomNumber from "../utils/RandomNumber";
import startSound from '../assets/audios/start.mp3'
import Winning from "../components/Winning";
import Losing from "../components/Losing";
import { useGameResult } from "../contexts/GameResultContext";
import Tying from "../components/Tying";

const DiceGame = () => {
    const [userNumber, setUserNumber] = useState(null);
    const [consoleNumber, setConsoleNumber] = useState(null);
    const [result, setResult] = useState(null);
    const { setHasLost, setHasTie, setHasWon, volume } = useGameResult();

    const generateNumber = () => {
        const startAudio = new Audio(startSound);
        if (volume) {
            startAudio.play();
        }
        const userNumberRandom = RandomNumber(6);
        const consoleNumberRandom = RandomNumber(6);

        setUserNumber(userNumberRandom);
        setConsoleNumber(consoleNumberRandom);
    }

    useEffect(() => {
        if (userNumber > consoleNumber) {
            setHasWon(true);
            setResult(<Winning />);
        } else if (userNumber < consoleNumber) {
            setHasLost(true);
            setResult(<Losing />)
        } else if (userNumber != null && userNumber === consoleNumber) {
            setHasTie(true);
            setResult(<Tying />)
        }
    }, [userNumber, consoleNumber])


    return (

        <div>
            <div className="dice-number-container">
                <div className="number">
                    <h2>Numero Player</h2>
                    <h4><strong>{userNumber}</strong></h4>
                </div>
                <div className="number">
                    <h2>Numero Pc</h2>
                    <h4><strong>{consoleNumber}</strong></h4>
                </div>
            </div>
            <div>
                <div >
                    <button className="btn btn-dark me-2 " onClick={generateNumber}>
                        Genera Numero Casuale
                    </button>
                </div>
                {result}
            </div>
        </div>

    )
}

export default DiceGame;