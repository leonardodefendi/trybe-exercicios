// App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    async function fetchJoke() {
      const API_URL = 'https://icanhazdadjoke.com/';
      const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
      const response = await fetch(API_URL, REQUEST_CONFIG);
      const data = await response.json();
      setJoke(data.joke)
    }
    fetchJoke();
  }, []);

  const handleClick = async() => {
    const API_URL = 'https://icanhazdadjoke.com/';
    const REQUEST_CONFIG = { headers: { Accept: 'application/json' } };
    const response = await fetch(API_URL, REQUEST_CONFIG);
    const data = await response.json();
    setJoke(data.joke)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>New Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default App;
