import React, {useEffect, useState} from 'react';
import axios from "axios"
import logo from './logo.svg';
import './App.css';
import Component from "./components/Component";

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")

    .then((res) => {
      console.log(res)
      setCharacters(res.data.results)
    })

    .catch((err) => {
      console.log(err)
    })

  }, [])

  return (
    <div className="App">
      <h1>App</h1>
      <Component data={characters} />
    </div>
  );
}

export default App;
