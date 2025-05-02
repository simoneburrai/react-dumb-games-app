import { useGameResult } from '../contexts/GameResultContext.jsx'



const Winning = () => {
    const { hasWon, resetGameStatus } = useGameResult();

    return hasWon && <div className="result winning">
        <h1>Hai Vinto!</h1>
        <button className="close" onClick={() => resetGameStatus()}>x</button>
    </div>
}

export default Winning;