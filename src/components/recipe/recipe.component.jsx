import React from "react";
import "./recipe.styles.scss";

function Recipe({ recipe }) {
  function handleImageClick(id) {
    console.log(id + " recipes before set");
  }

  return (
    <div key={recipe.id} className="recipeChild">
      <div key={`${recipe.id}-image`}>
        <img
          className="recipeChild-image"
          src={recipe.image}
          alt="My Image"
          onClick={() => handleImageClick(recipe.id)}
        />
      </div>
      <h2 className="recipeChild-Title">{recipe.title}</h2>
    </div>
  );
}

export default Recipe;
