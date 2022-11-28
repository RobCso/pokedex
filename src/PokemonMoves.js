import React, { useEffect, useState } from "react";

function PokemonMoves({ pokemonId }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    //const url = `https://pokeapi.co/api/v2/pokemon/${props.pokemonID}/`;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemonData(data);
      });
  }, [pokemonId]);

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
