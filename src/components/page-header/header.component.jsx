import React from "react";
import "./header.styles.scss";
import logoImage from "./../../assets/logo.jpg";
import Recipes from "./recipes/recipes.component";
const Header = () => {
  let result = "";
  let [recipes, setRecipes] = React.useState([]);

  async function handleSearchButton(event) {
    event.preventDefault();
    let result = await fetchDataFromApi();
    // console.log(result);
    setRecipes(result);
  }

  return (
    <div className="header">
      <img src={logoImage} className="siteLogo" alt="Logo" />

      <form className="search-form ">
        <input
          type="text"
          placeholder="Search..."
          className=".search-input"
          id="searchInput"
          defaultValue="egg"
        />
        <button className="search-button" onClick={handleSearchButton}>
          Search
        </button>
      </form>
      <Recipes result={recipes} />
    </div>
  );
};

function fetchDataFromApi() {
  let searchParameter = document.getElementById("searchInput");
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  return fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchParameter.value}&number=10&limitLicense=true&ranking=1&ignorePantry=false&apiKey=fc505b2eb4184b8b84144814e199dca1 `,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}

function showData(result) {
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].title);
  }
}
export default Header;
