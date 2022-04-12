import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const initCards = [
  { id: 1, order: 1, text: "1" },
  { id: 2, order: 2, text: "2" },
  { id: 3, order: 3, text: "3" },
  { id: 4, order: 4, text: "4" },
];

const newCards = [
  { id: 4, order: 1, text: "0" },
  { id: 2, order: 2, text: "0" },
  { id: 3, order: 3, text: "0" },
  { id: 1, order: 4, text: "0" },
];

const App = () => {
  

  const [cards, setCards] = useState(initCards);

  const [currentCard, setCurrentCard] = useState(null);


const onDragStart = (card) => {
  setCurrentCard(card)
}

const onDragEnd = (e) => {
  e.target.style.background = 'white'
 
 
}

const onDragLeave = (e) => {

  e.target.style.background = 'white'
 
}

const onDrop = (e, card) => {
   
  e.target.style.background = 'white'
  
  let newCards = cards.map(c => {
    if (c.id === card.id) {
      
          return {...c, order: currentCard.order}
        } 
    
        if (c.id === currentCard.id) {
          
          return {...c, order: card.order}
        }
        
        return c
  })
 
  setCards(newCards.sort(SortCards))
 

 

}

const onDragOver = (e) => {
  e.preventDefault()

  e.target.style.background = 'lightgray'
 
  }

const SortCards = (a, b) => {
  if (a.order > b.order) {
    return 1 
  } else if (a.order < b.order) {
    return -1
  }
  return 0
  }

  return (
   
    <div className="App">
      <div className="cardContainer">
        {
        cards.map((c) => {
          
          return <div key={c.id} className="cardItem" draggable="true" 
          onDragStart={(e) => onDragStart(e, c)}
          onDragEnd={(e) => onDragEnd(e)}
          onDragOver={(e) => onDragOver(e)}
          onDragLeave={(e) => onDragLeave(e)}
          onDrop={(e) => onDrop(e,c)}
          
          >{c.text}</div>;
         
        }
        )}
      </div>
    </div>
  );
}

export default App;
