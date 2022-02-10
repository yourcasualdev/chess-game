import GameBoard from "./components/gameboard/GameBoard";

function App() {
  return (
    <div className="App">
      <GameBoard gameStatus="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR" />
    </div>
  );
}

export default App;
