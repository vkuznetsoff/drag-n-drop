import { useState } from "react";
import "./Boards.css";

const initBoard = {
  board1: {
    id: 1,
    items: [
      { id: 11, text: "1-1" },
      { id: 12, text: "1-2" },
      { id: 13, text: "1-3" }],
  },

  board2: {
    id: 2,
    items: [
      { id: 21, text: "2-1" },
      { id: 22, text: "2-2" },
      { id: 23, text: "2-3" }
    ],
  },


  board3: {
    id: 3,
    items: [
      { id: 31, text: "3-1" },
      { id: 32, text: "3-2" },
      { id: 33, text: "3-3" }
    ]
  }
}


const Boards = () => {
  const [boards, setBoards] = useState(initBoard);
  console.log(boards)

  return (
    <div>

      <div className="boardContainer">
        {Object.entries(boards).map((board) => {
          return (
            <div className="boardItem">

              <div>{board[0]}</div>
              {board[1].items.map(item => {
                return (
                  <div className="item">
                    {item.text}
                  </div>)
              }
              )}

            </div>)
        })}

      </div>
    </div>
  );
};

export default Boards;
