import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from "react";

function PokemonPage() {
  const [pokeData, setPokeData] = useState([])
  const [search, setSearch] = useState("") 

  const displayData = pokeData.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(()=>{
    fetch(`http://localhost:3001/pokemon`)
      .then(r => r.json())
      .catch(error => console.error(error))
      .then(data => setPokeData(data))
  }, [])

  const searchInput = (input) =>{
    setSearch(input)
  }

  const addPoke = (newPoke) => {
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoke)
    }
    fetch("http://localhost:3001/pokemon", configObj)
    .then(r => r.json())
    .catch(error => console.error(error))
    .then(poke => setPokeData([...pokeData, poke]))
  }

  if(pokeData.length === 0){
    return <p>Loading...</p>
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPoke={addPoke}/>
      <br />
      <Search search={search} searchInput={searchInput}/>
      <br />
      <PokemonCollection displayData={displayData}/>
    </Container>
  );
}

export default PokemonPage;
