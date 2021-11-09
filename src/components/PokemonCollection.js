import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({displayData, sortBy}) {
  const [selectedAttribute, setSelectedAttribute] = useState("no sort")
  const pokeCardList = displayData.map(pokeCard => <PokemonCard pokeCard={pokeCard} key={pokeCard.id}/>)

  return (
    <div>

      <select value={selectedAttribute} style={{marginBottom: "10px"}} 
      onChange={(e) => {
        sortBy(e);
        setSelectedAttribute(e.target.value)}}
      >
          <option value="no sort">No Sort</option>
          <option value="hp">HP</option>
          <option value="name">Name</option>
      </select>

      <Card.Group itemsPerRow={6}>
        {pokeCardList}
      </Card.Group>

    </div>
   
  );
}

export default PokemonCollection;
