import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const initCards = [
  { id: 1, order: 1, text: "1" },
  { id: 2, order: 2, text: "2" },
  { id: 3, order: 3, text: "3" },
  { id: 4, order: 4, text: "4" },
];

const onDragStart = (e, card) => {
  console.log('onDragStart')
}

const onDragEnd = (e, card) => {
  console.log('onDragEnd')
}

const onDragLeave = (e, card) => {
  console.log('onDragLeave')
}

const onDrop = (e, card) => {
  console.log('onDrop')
}

const onDragOver = (e, card) => {
  console.log('onDragOver')
}

function App() {
  const [cards, setCards] = useState(initCards);
  
  return (
    <div className="App">
      <div className="cardContainer">
        {cards.map((c) => {
          return <div key={c.id} className="cardItem" draggable="true" 
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          >{c.text}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
