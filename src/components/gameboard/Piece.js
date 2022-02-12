import b from '../../assets/images/bishop_b.png';
import B from '../../assets/images/bishop_w.png';
import k from '../../assets/images/king_b.png';
import K from '../../assets/images/king_w.png';
import q from '../../assets/images/queen_b.png';
import Q from '../../assets/images/queen_w.png';
import r from '../../assets/images/rook_b.png';
import R from '../../assets/images/rook_w.png';
import p from '../../assets/images/pawn_b.png';
import P from '../../assets/images/pawn_w.png';
import n from '../../assets/images/knight_b.png';
import N from '../../assets/images/knight_w.png';

import { ItemTypes } from './ItemTypes';

import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const pieceMap = (piece) => {
    switch (piece) {
        case 'b':
            return b;
        case 'B':
            return B;
        case 'k':
            return k;
        case 'K':
            return K;
        case 'q':
            return q;
        case 'Q':
            return Q;
        case 'r':
            return r;
        case 'R':
            return R;
        case 'p':
            return p;
        case 'P':
            return P;
        case 'n':
            return n;
        case 'N':
            return N;
        default:
            return null;
    }
}





const Piece = ({ piece, coordinates }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        item: { coordinates },
        type: ItemTypes.PIECE,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
            coordinates: coordinates

        })
    }))

    return (
        <>
            {pieceMap(piece) ? <img src={pieceMap(piece)} alt={piece} className="piece" id={piece} ref={drag} /> : null}
        </>
    )
}

export default Piece