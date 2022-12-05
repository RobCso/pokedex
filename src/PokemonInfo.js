import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PokemonInfo = (props) => {
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.id}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        props.setName(data.name)
      })
      .catch((error) => console.error(error));
  }, [props.id]);
  const { name } = useParams();
  return <p>{name}</p>;
};

export default PokemonInfo;
