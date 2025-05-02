import { createContext, useContext, useState } from "react";

const GameResultContext = createContext();

export const GameResultProvider = ({ children }) => {
    const [hasWon, setHasWon] = useState(false);
    const [hasLost, setHasLost] = useState(false);
    const [hasTie, setHasTie] = useState(false);

    const resetGameStatus = () => {
        setHasWon(false);
        setHasLost(false);
        setHasTie(false);
    };


    return <GameResultContext.Provider value={{ hasWon, setHasWon, hasLost, setHasLost, hasTie, setHasTie, resetGameStatus }}>
        {children}
    </GameResultContext.Provider>

}

export const useGameResult = () => useContext(GameResultContext);
