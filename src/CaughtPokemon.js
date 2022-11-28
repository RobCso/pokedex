import React, { useState } from "react";

const CaughtPokemon = (props) => {
  // console.log(props);
  const [caught, setCaught] = useState([]);
  function catchPokemon() {
    const pokemonArray = ["Pikachu", "Eevee", "Charizard", "Snorlax", "Charmander"];
    const randomPokemon = pokemonArray[(Math.random() * pokemonArray.length) | 0];
    //console.log(randomPokemon);
    setCaught(caught.concat(randomPokemon));
  }
  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {props.myDate}
      </p>
      <button onClick={catchPokemon}>Catch</button>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </>
  );
};

export default CaughtPokemon;
