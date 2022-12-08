

import PokemonMoves from "./PokemonMoves";

function PokemonMovesSelector(props) {
  function handleBulbasaurClick(e) {
    e.preventDefault();
    props.setId(1);
  }
  function handleCharmanderClick(e) {
    e.preventDefault();
    props.setId(4);
  }

  return (
    <div>
      <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
      <button onClick={handleCharmanderClick}>Fetch Charmander</button>
      {props.id ? <PokemonMoves pokemonId={props.id} pokemonData={props.pokemonData} setPokemonData={props.setPokemonData} /> : null}
    </div>
  );
}

export default PokemonMovesSelector;
