import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Tipo from "./components/tipo";
import Altura from "./components/altura";
import Peso from "./components/peso";
import Nome from "./components/nome";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");
  const [type, setTypePokemon] = useState("");
  const [typeData, setTypeData] = useState([]);

  //UseState guarda o ultimo estado que foi inserido na variavel e sendo possivel ser trocado de forma dinamica.


  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
    setTypePokemon(e.target.value.toLowerCase());
    
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
      

      console.log(pokemon)

    } catch (e) {
      console.log(e);
    }
  };

 
  return (

    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input id="searchBar"
            type="text"
            onChange={handleChange}
            placeholder="Coloque nome ou id"
          />
        </label>
      </form>

      {pokemonData.map((data) => {
        return (
          <div className="container">
            <img src={data.sprites["front_default"]} alt="pokeimagem" />
            <div className="divTable">
              <div className="divTableBody">
                <Nome nome={data.name}></Nome>
                <Altura altura={Math.round(data.height * 3.9)} ></Altura>
                <Peso peso={Math.round(data.weight / 4.3)}></Peso>
                <Tipo tipo={pokemonType} className="container-tipo" ></Tipo>
                <Router>
                  <Link to="/evolucao">
                    <button type="button">evoluções</button>
                  </Link>
                  <Switch>
                    <Route exact path="/evolucao">
                      <Evolucao />
                    </Route>
                  </Switch>
                </Router>
              </div>
            </div>
          </div>
        );
      })}

      
    
      








   

    





      
    </div>
  );
};

export default App;






