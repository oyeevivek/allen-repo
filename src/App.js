import { useState } from "react";
import "./App.css";
import Card from "./Card";
import { useEffect } from "react";

function App() {
  const types = ["♣", "♠", "♦", "♥"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
  ];
  const [totalCards, setTotalCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [counter, setCounter] = useState(0);
  const [ocurrance, setOccurance] = useState([]);

  useEffect(() => {
    let pair = [];
    for (let i = 0; i < types.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        pair.push([types[i], numbers[j]]);
      }
    }
    setTotalCards(pair);
  }, []);

  const drawFiveCardsRandomly = () => {
    const fiveCards = [];
    let remainingCards = totalCards;
    while (fiveCards.length < 5 && remainingCards.length > 0) {
      const random = Math.floor(Math.random() * remainingCards.length);
      fiveCards.push(remainingCards[random]);
      remainingCards = remainingCards.filter((value) => {
        return !(
          value[0] === remainingCards[random][0] &&
          value[1] === remainingCards[random][1]
        );
      });
    }
    setTotalCards(remainingCards);
    return fiveCards;
  };

  const handleDrawCards = () => {
    setOccurance([...ocurrance, counter]);
    openedCards[counter] = drawFiveCardsRandomly();
    setOpenedCards(openedCards);
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      {totalCards.length >0 ? <Card message="Draw Cards" onclick={handleDrawCards}/> : <Card message="No more cards!" />}

      {ocurrance?.map((occur) => {
        return (
          <div className="cardRow">
            {openedCards[occur]?.map((value) => {
              return <Card type={value[0]} number={value[1]} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
