import { useState } from "react";
import "./Boards.css";

const initBoard1 = [
  { id: 11, text: "1-1" },
  { id: 12, text: "1-2" },
  { id: 13, text: "1-3" },
];

const initBoard2 = [
  { id: 21, text: "2-1" },
  { id: 22, text: "2-2" },
  { id: 23, text: "2-3" },
];

const initBoard3 = [
  { id: 31, text: "3-1" },
  { id: 32, text: "3-2" },
  { id: 33, text: "3-3" },
];

const Boards = () => {
  const [board1, setBoard1] = useState(initBoard1);
  const [board2, setBoard2] = useState(initBoard2);
  const [board3, setBoard3] = useState(initBoard3);
  return (
    <div>
      <div className="boardContainer">
        <div className="board">
          {board1.map((c) => {
            return <div className="item">{c.text}</div>;
          })}
        </div>

        <div className="board">
          {board2.map((c) => {
            return <div className="item">{c.text}</div>;
          })}
        </div>

        <div className="board">
          {board1.map((c) => {
            return <div className="item">{c.text}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Boards;
