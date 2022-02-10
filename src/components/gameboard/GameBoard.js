import './gameboard.css';
import Square from './Square';
import FENBoard from "fen-chess-board";
import { useState, useEffect } from 'react';



const GameBoard = ({ gameStatus, props }) => {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        const boardArr = [];
        //FENboard to array
        const fenBoard = new FENBoard(gameStatus);
        console.log(fenBoard.board);

        for (let x = 7; x >= 0; x--) {
            for (let y = 0; y < 8; y++) {
                const piece = fenBoard.board[x][y];
                boardArr.push(<Square xAxis={x} yAxis={y} key={`${x}${y}`} piece={piece} />)
            }

        }
        setBoard(boardArr);
        return () => {
            console.log('unmounting');
        }
    }, [gameStatus]);

    return (
        <div className="gameboard">
            {board}
        </div>
    )
}

export default GameBoard