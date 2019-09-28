import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  // Set Star Wars characters data to state
  const [characters, setCharacters] = useState([]);

  // Get data of Star Wars characters from SWAPI
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then((response) => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(characters);

  // App
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
};

export default App;
