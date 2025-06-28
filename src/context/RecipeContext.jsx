import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import customized_recipes from '../data/customized_recipes.json';
export const recipeContext = createContext(null)
const RecipeContext = (props) => {
    const [data, setData] = useState(customized_recipes);

    useEffect(() =>{
        const storedRecipes = localStorage.getItem("recipes");
        if (storedRecipes) {
            setData(JSON.parse(storedRecipes));
        } else {
            localStorage.setItem("recipes", JSON.stringify(customized_recipes));
        }
    }, []);
    
    console.log("RecipeContext", data);
  return (
    <recipeContext.Provider value={{data, setData}}>
        {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext




