import './gameboard.css';
import Bishop from '../pieces/Bishop';
import King from '../pieces/King';
import Knight from '../pieces/Knight';
import Pawn from '../pieces/Pawn';
import Queen from '../pieces/Queen';

import FENBoard from "fen-chess-board";


const Square = ({ xAxis, yAxis }) => {
    const squareClass = `square ${xAxis}${yAxis}`;
    const blackBlocks = 'a1a3a5a7b2b4b6b8c1c3c5c7d2d4d6d8e1e3e5e7f2f4f6f8g1g3g5g7h2h4h6h8';
    const isBlack = blackBlocks.includes(`${xAxis}${yAxis}`);
    return (
        <span className="square" id={squareClass} style={isBlack ? { backgroundColor: '#769656' } : { backgroundColor: '#eeeed2' }} ></span>
    )
}

const DrawBoard = ({ gameStatus, props }) => {
    const board = [];
    const verticalAxis = [8, 7, 6, 5, 4, 3, 2, 1];
    const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];


    for (let y of verticalAxis) {
        for (let x of horizontalAxis) {
            board.push(<Square xAxis={x} yAxis={y} key={`${x}${y}`} />)
        }
    }

    let fenBoard = new FENBoard(gameStatus);
    console.log(fenBoard.board[2][0]);



    return (
        <div className="gameboard">
            {board}
            <Bishop />
        </div>
    )
}



const GameBoard = ({ gameStatus }) => {
    return (
        <DrawBoard gameStatus={gameStatus} />
    )
}
export default GameBoard