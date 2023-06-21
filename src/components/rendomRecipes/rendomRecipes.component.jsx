import React, { useEffect, useState } from "react";
import Recipes from "../recipes/recipes.component";

const RendomRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      let ingredient = ["egg", "potato,tomato", "arugula", "brie cheese"];
      let selectedIngredient =
        ingredient[Math.floor(Math.random() * ingredient.length)];
      console.log(selectedIngredient + " selected Value");
      const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedIngredient}&number=10&limitLicense=true&ranking=1&ignorePantry=false&apiKey=fc505b2eb4184b8b84144814e199dca1`;

      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
          throw new Error("Request failed with status " + response.status);
        }

        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.log("Error:", error);
        throw error;
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      {recipes.length > 0 ? (
        <Recipes recipes={recipes} />
      ) : (
        <p>Loading recipes...</p>
      )}
    </div>
  );
};

export default RendomRecipes;
