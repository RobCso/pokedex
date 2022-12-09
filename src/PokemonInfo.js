import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonInfo = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPokemon(data);
      })
      .catch((error) => console.error(error));
  }, [id]);
  const { name } = useParams();
  return (
    <div>
      <h1>Pokemon Info</h1>
      {pokemon && (
        <ul>
          <li>Name: {name}</li>
          <li>Color: {pokemon.color.name}</li>
          <li>Shape: {pokemon.shape.name}</li>
          <li>Happiness: {pokemon.base_happiness}</li>
          <li>Capture rate: {pokemon.capture_rate}</li>
        </ul>
      )}
    </div>
  );
};

export default PokemonInfo;
