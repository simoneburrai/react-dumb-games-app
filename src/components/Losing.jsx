import { useGameResult } from '../contexts/GameResultContext.jsx'



const Losing = () => {
    const { hasLost, resetGameStatus } = useGameResult();

    return hasLost && <div className="result losing">
        <h1>Hai Perso!</h1>
        <button className="close" onClick={() => resetGameStatus()}>x</button>
    </div>
}

export default Losing;