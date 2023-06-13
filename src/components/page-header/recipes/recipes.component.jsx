import React, { useState } from "react";
import "./recipes.styles.scss";
import Recipe from "../../recipe/recipe.component";

const Recipes = ({ recipes }) => {
  console.log(recipes + " recipes at the begonning");

  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [searchRecipes, setsearchRecipes] = useState(null);

  function showData() {
    return recipes.map((recipe) => (
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
    console.log(recipes + " recipes before set");
    setsearchRecipes(recipes);
  }

  return (
    <div className="container">
      {showData()}
      {selectedRecipeId && (
        <Recipe selectedRecipeId={selectedRecipeId} recipes={searchRecipes} />
      )}
    </div>
  );
};

export default Recipes;
