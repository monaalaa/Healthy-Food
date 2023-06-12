import React, { useState } from "react";
import "./recipes.styles.scss";

const Recipes = ({ result }) => {
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  function showData() {
    return result.map((recipe) => (
      <div key={recipe.id}>
        <h2>{recipe.title}</h2>
        {createImage(recipe)}
      </div>
    ));
  }

  function createImage(recipe) {
    return (
      <div className="gridItem">
        <img
          src={recipe.image}
          alt="My Image"
          onClick={() => handleImageClick(recipe.id)}
        />
      </div>
    );
  }

  function handleImageClick(id) {
    setSelectedRecipeId(id);
  }

  function getRecipeById(id) {
    const selectedRecipe = result.find((recipe) => recipe.id === id);

    return (
      <div className="recipeDetails">
        <h2>{selectedRecipe.title}</h2>
        <p>Likes: {selectedRecipe.likes}</p>
        <p>Missed Ingredient Count: {selectedRecipe.missedIngredientCount}</p>
      </div>
    );
  }

  return (
    <div className="container">
      {showData()}
      {selectedRecipeId && getRecipeById(selectedRecipeId)}
    </div>
  );
};

export default Recipes;
