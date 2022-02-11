import GameBoard from "./components/gameboard/GameBoard";

import { useState, useEffect } from 'react';

function App() {
  const [gameStatus, setGameStatus] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

  return (
    <div className="App">
      <GameBoard gameStatus={gameStatus} setGameStatus={setGameStatus} />
      <button onClick={() => setGameStatus('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')}>Reset</button>
      <button onClick={() => setGameStatus('rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2')}>Up</button>

    </div>
  );
}

export default App;
