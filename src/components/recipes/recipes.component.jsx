import React from "react";
import "./recipes.styles.scss";
import Recipe from "../recipe/recipe.component";

const Recipes = ({ recipes }) => {
  return (
    <div className="Recipes-Container">
      {recipes &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Recipes;
