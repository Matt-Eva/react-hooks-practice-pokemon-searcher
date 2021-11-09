import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({displayData}) {
  const pokeCardList = displayData.map(pokeCard => <PokemonCard pokeCard={pokeCard} key={pokeCard.id}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {pokeCardList}
    </Card.Group>
  );
}

export default PokemonCollection;
