import './gameboard.css';
import Square from './Square';
import FENBoard from "fen-chess-board";
import { useState, useEffect } from 'react';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'



const GameBoard = ({ gameStatus, props, setGameStatus }) => {
    const [board, setBoard] = useState([]);

    useEffect(() => {
        const boardArr = [];
        //FENboard to array
        const fenBoard = new FENBoard(gameStatus);

        for (let x = 0; x <= 7; x++) {
            for (let y = 0; y < 8; y++) {
                const piece = fenBoard.board[x][y];
                boardArr.push(<Square xAxis={x} yAxis={y} key={`${x}${y}`} piece={piece} setGameStatus={setGameStatus} gameStatus={gameStatus} />)
            }

        }
        setBoard(boardArr);
        console.log(gameStatus);
    }, [gameStatus]);



    return (
        <DndProvider backend={HTML5Backend}>
            <div className="gameboard">
                {board}
            </div>
        </DndProvider>
    )
}

export default GameBoard