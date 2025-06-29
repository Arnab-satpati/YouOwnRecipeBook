import React, { createContext, useState, useEffect } from 'react';
import customized_recipes from '../data/customized_recipes.json';

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  // Ensure all recipes have `instructions` field
  const ensureInstructionsField = (recipes) => {
    return recipes.map((recipe) => ({
      ...recipe,
      instructions: recipe.instructions || '',
    }));
  };

  const [data, setData] = useState(ensureInstructionsField(customized_recipes));

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");

    if (storedRecipes) {
      try {
        const parsed = JSON.parse(storedRecipes);

        if (Array.isArray(parsed) && parsed.length > 0) {
          setData(ensureInstructionsField(parsed));
        } else {
          // fallback to default
          const cleanDefaults = ensureInstructionsField(customized_recipes);
          setData(cleanDefaults);
          localStorage.setItem("recipes", JSON.stringify(cleanDefaults));
        }
      } catch (e) {
        console.warn("Invalid localStorage data, resetting to default.");
        const cleanDefaults = ensureInstructionsField(customized_recipes);
        setData(cleanDefaults);
        localStorage.setItem("recipes", JSON.stringify(cleanDefaults));
      }
    }
  }, []);

  console.log("RecipeContext", data);

  return (
    <recipeContext.Provider value={{ data, setData }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
