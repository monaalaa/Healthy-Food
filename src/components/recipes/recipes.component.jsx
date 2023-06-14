import React from "react";
import "./recipes.styles.scss";
import QuickView from "../QuickView/QuickView.component";
import Recipe from "../recipe/recipe.component";

const Recipes = ({ recipes }) => {
  console.log(recipes);

  return (
    <div className="Recipes-Container">
      {recipes && recipes.map((recipe) => <Recipe recipe={recipe} />)}
    </div>
  );
};

export default Recipes;
