import React, { useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  // const [cards, setCards] = useState([]);
  
  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/")
  //     setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  //   }
  
  const BASE_URL =  "https://deckofcardsapi.com/api/deck/new/draw/"
  const [fetchData, responses, error] = useAxios(BASE_URL)
  if (error) console.log(error);
 
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={fetchData}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {responses.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
