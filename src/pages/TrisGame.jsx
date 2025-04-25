import { useEffect, useState } from "react"
import RandomNumber from "../utils/RandomNumber";

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Righe
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonne
    [0, 4, 8], [2, 4, 6]             // Diagonali
];

function Tris() {

    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const [playerTurn, setPlayerTurn] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [result, setResult] = useState(null);
    const randomNum = RandomNumber(9);
    const computer = "O";
    const player = "X"

    const checkWin = (board, player) => {
        return winningCombinations.some(combination => {
            return combination.every(index => board[index] === player);
        });
    }

    const checkTie = (board) => {
        return board.every(box => box != "");
    }




    const playFunction = () => {
        setPlayerTurn(true);
        setPlaying(true);
        setBoard(["", "", "", "", "", "", "", "", ""]);
        setResult(null);
    }

    const changeValue = (i) => {
        if (playing && board[i] == "" && playerTurn) {
            setBoard(() => {
                const newArr = [...board];
                newArr[i] = "X";
                return newArr;
            })

            setPlayerTurn(prev => !prev);
        }
    }

    useEffect(() => {
        if (playing) {
            if (checkWin(board, computer)) {
                setResult("Hai perso");
                setPlaying(false);
            } else if (checkWin(board, player)) {
                setResult("Hai Vinto");
                setPlaying(false);
            } else if (checkTie(board)) {
                setResult("Pareggio");
                setPlaying(false);
            }
        }

    }, [board, playing])

    useEffect(() => {
        let timeOut;
        if (!playerTurn && playing) {
            timeOut = setTimeout(() => {
                const newArr = [...board];
                let randomId = randomNum;
                while (newArr[randomId] !== "") {
                    randomId = RandomNumber(9);
                }
                newArr[randomId] = "O"
                setBoard(newArr);
                setPlayerTurn(true);
            }, 1000)
        }
        return () => {
            if (timeOut) {
                clearTimeout(timeOut);
            }
        }
    }, [playerTurn, board, playing])



    return (
        <>

            <div className="tris-board">{board.map((value, index) => <button key={index} onClick={() => changeValue(index)}>{value}</button>)}</div>
            <button onClick={playFunction}>PLAY</button>
            {result && <div>{result}</div>}
        </>
    )
}

export default Tris;
