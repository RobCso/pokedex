import React, { useEffect, useState } from "react";

const url = "https://pokeapi.co/api/v2/pokemon/1/";

function PokemonMoves() {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, []);

  console.log(pokemonData);
  return (
    <div>
      {pokemonData ? (
        <div>
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default PokemonMoves;
