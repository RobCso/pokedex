import React, { useEffect } from "react";

function PokemonMoves({ pokemonId, pokemonData, setPokemonData }) {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
        console.log(setPokemonData);
      });
  }, [pokemonId, setPokemonData]);

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
