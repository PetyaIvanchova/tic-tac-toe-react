import Box from "./Box";
import "./Board.css";

const Board = ({ board, gameOver, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <Box value={value} gameOver={gameOver} onClick={() => value === null && onClick(idx)} />
        );
      })}
    </div>
  );
};

export default Board;
