import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const initCards = [
  { id: 1, order: 1, text: "1" },
  { id: 2, order: 2, text: "2" },
  { id: 3, order: 3, text: "3" },
  { id: 4, order: 4, text: "4" },
];


const App = () => {
  

  const [cards, setCards] = useState(initCards);

  const [currentCard, setCurrentCard] = useState(null);

  // useEffect( () => console.log('UseEffect'), [cards])

const onDragStart = (e, card) => {
 
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
  setCards(cards => cards.map( (c) => {
    if (c.id === card.id) {
      return {...c, order: currentCard.order}
    } 

    if (c.id === currentCard.id) {
      return {...c, order: card.order}
    }

    return c
  }))
  
}

const onDragOver = (e) => {
  e.preventDefault()

  e.target.style.background = 'lightgray'
 
  }

const SortCards = (a, b) => {
  if (a.order > b.order) {
    return 1 
  } else if (a < b) {
    return -1
  }
  return 0
  }

  useEffect(() => {
    setCards(cards => cards.sort(SortCards));
    console.log(cards)
  }, [cards]);

  return (
   
    <div className="App">
      <div className="cardContainer">
        { 
        cards.sort(SortCards).map((c) => {
          
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
