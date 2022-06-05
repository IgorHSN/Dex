import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Tipo from "./components/tipo";
import Altura from "./components/altura";
import Peso from "./components/peso";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  //UseState guarda o ultimo estado que foi inserido na variavel e sendo possivel ser trocado de forma dinamica.


  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  // quando eu escrevo o nome do pokemon essa função é chamada no input setando o nome do pokemon no useState e troca a fonte para o lowercase porque se o nome do poke for escrito com letras maiusculas  da erro na request

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      console.log(e);
    }
  };


  return (

    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Coloque nome ou id"
          />
        </label>
      </form>

      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} />
            <div className="divTable">
              <div className="divTableBody">
                <Tipo tipo={pokemonType} className="divTableCell"></Tipo>
                <Altura altura={Math.round(data.height * 3.9)} ></Altura>
                <Peso peso={Math.round(data.weight / 4.3)}></Peso>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;










// const toArray = [];
// try {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//   const pokeDesc = `https://pokeapi.co/api/v2/ability/${pokemon}`;

//   const resPokemon = await axios.get(url);
//   const resPokemonEtc = await axios.get(pokeDesc);

//   axios.all([resPokemon, resPokemonEtc]).then(
//     axios.spread((...allData) => {
//       console.log(allData);
//     })
//   );
//   // console.log(res);
//   toArray.push(res.data);
//   setPokemonData(toArray);
// } catch (e) {
//   console.log(e);
// }
