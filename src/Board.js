import Box from "./Box";
import HoC from "./HoC";
import { useState,useEffect } from "react";
const Board = (props) => {
    let numberOfBoxes = 9;
    const [player1, setPlayer1] = useState(true);
    const [boxClickedHistory, setBoxClickedHistory] = useState([]);
    const winnerMoves = [[0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6]]

    const handleMoves = (id) => {
        const newMove = {
            player1: player1,
            idBox: id 
        }
        setBoxClickedHistory(prevState => [...prevState, newMove]);
        setPlayer1(!player1)
    };

    const checkWinner = (playerMoves) => {
        const checkMoves = winnerMoves.map(e => e.every(e => playerMoves.includes(e)))
        console.log(checkMoves)
        return checkMoves.includes(true)
    }


    useEffect(() => {
        console.log("boxClickedHistory",boxClickedHistory)

        const player1Moves = boxClickedHistory.filter(e => e.player1 === true).map(e => e.idBox);
        const player2Moves = boxClickedHistory.filter(e => e.player1 === false).map(e => e.idBox);
        if (checkWinner(player1Moves)){
            alert("Player 1 wins!")
        }else if(checkWinner(player2Moves)){
            alert("Player 2 wins!")
        }else if(boxClickedHistory.length === numberOfBoxes){
            alert("Draw!")
        }
    },[boxClickedHistory])

    return(
        <section>
            <section id="Grid">
                {[...Array(numberOfBoxes)].map((e, i) => <Box key={i} id={i} boxClickedHistory={boxClickedHistory} handleMoves={handleMoves}/>)} 
            </section>
            <p id="player_section"> Active Player: {player1 ? "1" : "2"}</p>
        </section>
    )
}
export default Board;
