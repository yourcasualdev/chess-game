import React from 'react';
import Piece from './Piece';

import { ItemTypes } from './ItemTypes';
import { useDrop } from 'react-dnd';

import FENBoard from "fen-chess-board";


const Square = ({ xAxis, yAxis, piece, setGameStatus, gameStatus }) => {
    const squareClass = `${xAxis}${yAxis}`;
    const isBlack = (xAxis + yAxis) % 2 === 0;


    const movePiece = async (from, to) => {
        const coordinateMap = {
            "00": "a8",
            "01": "b8",
            "02": "c8",
            "03": "d8",
            "04": "e8",
            "05": "f8",
            "06": "g8",
            "07": "h8",
            "10": "a7",
            "11": "b7",
            "12": "c7",
            "13": "d7",
            "14": "e7",
            "15": "f7",
            "16": "g7",
            "17": "h7",
            "20": "a6",
            "21": "b6",
            "22": "c6",
            "23": "d6",
            "24": "e6",
            "25": "f6",
            "26": "g6",
            "27": "h6",
            "30": "a5",
            "31": "b5",
            "32": "c5",
            "33": "d5",
            "34": "e5",
            "35": "f5",
            "36": "g5",
            "37": "h5",
            "40": "a4",
            "41": "b4",
            "42": "c4",
            "43": "d4",
            "44": "e4",
            "45": "f4",
            "46": "g4",
            "47": "h4",
            "50": "a3",
            "51": "b3",
            "52": "c3",
            "53": "d3",
            "54": "e3",
            "55": "f3",
            "56": "g3",
            "57": "h3",
            "60": "a2",
            "61": "b2",
            "62": "c2",
            "63": "d2",
            "64": "e2",
            "65": "f2",
            "66": "g2",
            "67": "h2",
            "70": "a1",
            "71": "b1",
            "72": "c1",
            "73": "d1",
            "74": "e1",
            "75": "f1",
        }

        const fenBoard = new FENBoard(gameStatus);
        await fenBoard.move(coordinateMap[from], coordinateMap[to]);
        await setGameStatus(fenBoard.fen);
    }



    const [, drop] = useDrop(() => ({
        accept: ItemTypes.PIECE,
        drop: (object) => {
            console.log('Move piece from ' + object.coordinates + ' to ' + squareClass);
            movePiece(object.coordinates, squareClass);
        },
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }), [])



    return (
        <div className="square" ref={drop} id={squareClass} style={{ touchaction: "none" }} style={isBlack ? { backgroundColor: '#769656' } : { backgroundColor: '#eeeed2' }} >
            <Piece piece={piece} coordinates={squareClass} />
            {squareClass}
        </div>
    )
}

export default Square