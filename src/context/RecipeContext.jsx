import React, { createContext, useState } from 'react';
import customized_recipes from '../data/customized_recipes.json';
export const recipeContext = createContext(null)
const RecipeContext = (props) => {
    const [data, setData] = useState(customized_recipes);
    console.log("RecipeContext", data);
  return (
    <recipeContext.Provider value={{data, setData}}>
        {props.children}
    </recipeContext.Provider>
  )
}

export default RecipeContext




