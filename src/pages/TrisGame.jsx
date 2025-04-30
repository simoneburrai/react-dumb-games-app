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
    const computerSymbol = <i className="fa-solid fa-circle fs-2"></i>
    const playerSymbol = <i className="fa-solid fa-circle-xmark text-success fs-2" ></i>;

    function checkWin(board, player) {
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
                newArr[i] = playerSymbol;
                return newArr;
            })

            setPlayerTurn(prev => !prev);
        }
    }

    useEffect(() => {
        if (playing) {
            if (checkWin(board, computerSymbol)) {
                setResult("Hai perso");
                setPlaying(false);
            } else if (checkWin(board, playerSymbol)) {
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
                newArr[randomId] = computerSymbol;
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
            <div className="container mt-4">
                <div className="row row-cols-3 g-2 mb-3" style={{ width: '300px' }}>
                    {board.map((value, index) => (
                        <div key={index} className="col" style={{ aspectRatio: '1/1' }}>
                            <button
                                className={`btn btn-outline-primary w-100 h-100 fs-2 ${value ? (value === 'X' ? 'text-success' : 'text-danger') : ''}`}
                                onClick={() => changeValue(index)}
                                style={{ minHeight: '80px' }} // Altezza minima per i bottoni
                            >
                                {value}
                            </button>
                        </div>
                    ))}
                </div>
                <button className="btn btn-primary me-2" onClick={playFunction}>Gioca</button>
                {result && <div className="alert alert-info mt-3" role="alert">{result}</div>}
            </div>
        </>
    );
}
export default Tris;
