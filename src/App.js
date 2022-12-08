import React, { useState } from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import "./App.css";
import PokemonInfo from "./PokemonInfo";

const abilities = ["Anticipation", "Adaptability", "Run-Away", "Fight", "Fly"];
const date = new Date().toLocaleDateString();
const clickLog = () => {
  console.log("Button was clicked!");
};

const App = () => {
  const [id, setId] = useState(null);
  const [pokemonData, setPokemonData] = useState(null);
  return (
    <BrowserRouter>
      <Header pokemonData={pokemonData} />
      <div>
        <Logo appName="Pokedex" logWhenClicked={clickLog} />
        {/* <BestPokemon arrayOfAbilities={abilities} /> */}
        {/* <CaughtPokemon myDate={date} appNames="Pokedex" /> */}
        <PokemonMovesSelector
          id={id}
          setId={setId}
          pokemonData={pokemonData}
          setPokemonData={setPokemonData}
        />
        <Routes>
          <Route
            path="/caught-pokemon"
            element={<CaughtPokemon myDate={date} appNames="Pokedex" />}
          />
          <Route
            path="best-pokemon"
            element={<BestPokemon arrayOfAbilities={abilities} />}
          />
          <Route path="/pokemon/:name" element={<PokemonInfo id={id} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
