import React from 'react';
import './App.css';

const App = () => {
  const APP_ID = "40dc8734";
  const APP_KEY = "8c00ece7497d25372d10084703c08d41";
  const req = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="serach-form">
        <input className="search-bar" type="text" />
        <button className="seacrh-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
