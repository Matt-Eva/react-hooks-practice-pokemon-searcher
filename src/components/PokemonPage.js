import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from "react";

function PokemonPage() {
  const [unsortedPokeData, setUnsortedPokeData] = useState([])
  const [pokeData, setPokeData] = useState([])
  const [search, setSearch] = useState("") 

  const displayData = pokeData.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(()=>{
    fetch(`http://localhost:3001/pokemon`)
      .then(r => r.json())
      .catch(error => console.error(error))
      .then(data => {
        setPokeData([...data])
        setUnsortedPokeData([...data])
      })
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

  const sortBy = (e) =>{
    if (e.target.value === "no sort"){
      console.log(e.target.value)
      setPokeData([...unsortedPokeData])
    } else if (e.target.value === "hp"){
      console.log(e.target.value)
      const hpData = pokeData.sort((a, b) =>{
        return b.hp - a.hp;
      })
      setPokeData([...hpData])
    } else if (e.target.value === "name"){
      console.log(e.target.value)
      const alphabetical = pokeData.sort((a, b) =>{
        let fla = a.name.toLowerCase()
        let flb = b.name.toLowerCase()

        if (fla < flb){
          return -1
        } else if (fla > flb){
          return 1
        } else{
          return 0
        }
      })
      setPokeData([...alphabetical])
    }
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
      <label>Sort By: </label>
      <PokemonCollection displayData={displayData} sortBy={sortBy}/>
    </Container>
  );
}

export default PokemonPage;
