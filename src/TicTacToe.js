import React, { useState } from "react";

const TicTacToe = () => {
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
};
export default TicTacToe;

function Board() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log(lines[i], a,b,c);
        console.log(board);
        console.log("Winner", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const handleClick = (index) => {
    console.log(index);
    // Allow updating in untouched boxes; null means untouched
    // If no winner && If its untouched - then update
    // board[index] === null
    if (!winner && !board[index]) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      // Changing turn
      setIsXTurn(!isXTurn);
    }
  };

  return (
    <div className="board">
      {board.map((val, index) => (
        <GameBox key={index} val={val} onPlayerClick={() => handleClick(index)} />
      ))}
      <h2>Winner is : {winner}</h2>
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {
  //   const [val, setVal] = useState("");
  const styles = {
    color: val === "X" ? "green" : "red",
  };
  return (
    <div style={styles} onClick={onPlayerClick} className="game-box">
      {val}
    </div>
  );
}

//   onClick={() => setVal(val === "X" ? "O" : "X")}

// X -> green
// O -> Red
