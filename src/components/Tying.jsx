import { useGameResult } from '../contexts/GameResultContext.jsx'
import { useState } from 'react';



const Tying = () => {
    const { hasTie, resetGameStatus } = useGameResult();
    return hasTie && <div className="result tying">
        <h1>Pareggio</h1>
        <button className="close" onClick={() => resetGameStatus()}>x</button>
    </div>

}
export default Tying;