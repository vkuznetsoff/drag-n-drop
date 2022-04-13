import { useState } from "react";
import "./Boards.css";

const initBoard = [
  {
    id: 1,
    items: [
      { id: 11, text: "1-1" },
      { id: 12, text: "1-2" },
      { id: 13, text: "1-3" },
    ],
  },

  {
    id: 2,
    items: [
      { id: 21, text: "2-1" },
      { id: 22, text: "2-2" },
      { id: 23, text: "2-3" },
    ],
  },

  {
    id: 3,
    items: [
      { id: 31, text: "3-1" },
      { id: 32, text: "3-2" },
      { id: 33, text: "3-3" },
    ],
  },
];

const Boards = () => {
  const [boards, setBoards] = useState(initBoard);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  const onDragStart = (e, board, item) => {
    setCurrentBoard(board);
    setCurrentItem(item);
    // setTimeout(() => {
    //   console.log(currentBoard, currentItem)
    // }, 1500);
  };


  const onBoardDragOver = (e, board) => {
    e.preventDefault();
    
    if (e.target.className == "boardItem" && board.items.length == 0) {
      console.log('!')
      e.target.style.backgroundColor = 'gray';
    }
   
    
  };

  const onDragOver = (e, board) => {
    e.preventDefault();
    if (e.target.className == "item") {
      e.target.style.boxShadow = '5px 25px 10px gray';
    }
   
  };

  const onDragLeave = (e) => {
    e.target.style.boxShadow = "none";
  };

  const onDragEnd = (e) => {
    e.target.style.boxShadow = "none";
  };

  const onDrop = (e, board, item) => {
    e.preventDefault();
    e.target.style.boxShadow = "none";
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    const removeIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(removeIndex, 1)
  
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board
        }
        if (b.id === currentBoard.id) {
          return currentBoard
        }

        return b
      })
    );
    // setTimeout(() => {
    //   console.log(boards);
    // }, 1500);
  };

  return (
    <div>
      <div className="boardContainer" >
        {boards.map((board) => {
          return (
            <div className="boardItem" draggable="true"
            onDragOver = { (e) => onBoardDragOver(e, board)}>
              <div>Доска</div>
              {board.items.map((item) => {
                return (
                  <div
                    className="item"
                    draggable="true"
                    onDragStart={(e) => onDragStart(e, board, item)}
                    onDragOver={(e) => onDragOver(e, board)}
                    onDragLeave={(e) => onDragLeave(e)}
                    onDragEnd={(e) => onDragEnd(e)}
                    onDrop={(e) => onDrop(e, board, item)}
                  >
                    {item.text}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Boards;
