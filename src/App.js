// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMoves from "./PokemonMoves";


const abilities = ["Anticipation", "Adaptability", "Run-Away", "Fight", "Fly"];
const date = new Date().toLocaleDateString();
const clickLog =() => {
  console.log("Button was clicked!");
};


const App = () => {
  return (
    <div>
      <Logo appName="Pokedex" logWhenClicked={clickLog}/>
      <BestPokemon arrayOfAbilities={abilities} />
      <CaughtPokemon myDate={date} appNames="Pokedex"/>
      <PokemonMoves />
    </div>
  );
};

export default App;
