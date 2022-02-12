import GameBoard from "./components/gameboard/GameBoard";

import { useState, useEffect } from 'react';

function App() {
  const [gameStatus, setGameStatus] = useState('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

  return (
    <div className="App">
      <GameBoard gameStatus={gameStatus} setGameStatus={setGameStatus} />
    </div>
  );
}

export default App;
