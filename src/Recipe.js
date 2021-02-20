import React from 'react';

const Recipe = ({title,calories,image,ingredients})=>{
    return(
        <div>
            <h1>{title}</h1>
            <p>calories: {calories}</p>
            <p>ingredients: 
                {ingredients.map(ing=>(
                    <li>{ing.text}</li>
                ))}
            </p>
            <img src ={image}></img>
        </div>
    )
}
export default Recipe;