import { useEffect, useState } from "react"
function Tris() {

    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const [playerTurn, setPlayerTurn] = useState(true);

    const randomNumber = () => Math.floor(Math.random() * 9);



    const changeValue = (i) => {

        setBoard(() => {
            const newArr = [...board];
            newArr[i] = playerTurn ? "X" : "O"
            return newArr;
        })

        setPlayerTurn(prev => !prev);
    }


    useEffect(() => {
        let timeOut;
        if (!playerTurn) {
            timeOut = setTimeout(() => {
                const newArr = [...board];
                let randomId = randomNumber();
                while (newArr[randomId] !== "") {
                    randomId = randomNumber();
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
    }, [playerTurn, board])



    return (
        <>
            <div className="board">{board.map((value, index) => <button key={index} onClick={() => changeValue(index)}>{value}</button>)}</div>
        </>
    )
}

export default Tris;
