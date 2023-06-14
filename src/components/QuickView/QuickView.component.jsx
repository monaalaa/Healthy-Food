import React, { useState } from "react";

const QuickView = ({ selectedRecipeId, recipes }) => {
  function getRecipeById(id, recipes) {
    const selectedRecipe = recipes.find((recipe) => recipe.id === id);

    return (
      <div className="recipeDetails">
        <h2>{selectedRecipe.title}</h2>
        <p>Likes: {selectedRecipe.likes}</p>
        <p>Missed Ingredient Count: {selectedRecipe.missedIngredientCount}</p>
      </div>
    );
  }
  return <div>{getRecipeById(selectedRecipeId, recipes)}</div>;
};
export default QuickView;
