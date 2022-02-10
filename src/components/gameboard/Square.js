import React from 'react';
import Piece from './Piece';

const Square = ({ xAxis, yAxis, piece }) => {
    const squareClass = `square ${xAxis}${yAxis}`;
    const isBlack = (xAxis + yAxis) % 2 === 0;
    return (
        <div className="square" id={squareClass} style={isBlack ? { backgroundColor: '#769656' } : { backgroundColor: '#eeeed2' }} >
            <Piece piece={piece} />
        </div>
    )
}

export default Square