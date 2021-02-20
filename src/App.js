import React,{useEffect, useState} from 'react';
import Recipe from './Recipe.js';
import './App.css';

const App = () => {

  const APP_ID = "40dc8734";
  const APP_KEY = "8c00ece7497d25372d10084703c08d41";
  const [recipes, setRecipes]= useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');
  const req = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(()=>{
    getRecipes()
  },[query]);

  const getRecipes = async ()=> {
    const resp = await fetch(req);
    const data = await resp.json();
    setRecipes(data.hits);
  }

  const updateSearch = e=>{
    setSearch(e.target.value);
  }

  const updateQuery = e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div onSubmit={updateQuery} className="App">
      <form className="serach-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="seacrh-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        ))}
    </div>
  );
};

export default App;
