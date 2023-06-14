import React from "react";
import "./Header.styles.scss";
import logoImage from "./../../assets/logo.png";
import Recipes from "../recipes/recipes.component";

const Header = () => {
  let [recipes, setRecipes] = React.useState([]);

  /*React.useEffect(() => {
    const data = getRandomRecipes();
    setRecipes(data);
  }, []);*/
  async function handleSearchButton(event) {
    event.preventDefault();
    let result = await fetchDataFromApi();

    setRecipes(result);
  }
  return (
    <div>
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
      </div>
      <div>
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
};

function fetchDataFromApi() {
  clearPreviousSearch();
  let searchParameter = document.getElementById("searchInput");

  return fetchRecipes(searchParameter);
}
async function getRandomRecipes() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const url =
    "https://api.spoonacular.com/recipes/random?limitLicense=true&tags=ipsum ea proident amet occaecat&number=10&apiKey=fc505b2eb4184b8b84144814e199dca1";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data;
}
async function fetchRecipes(searchParameter) {
  const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchParameter.value}&number=10&limitLicense=true&ranking=1&ignorePantry=false&apiKey=fc505b2eb4184b8b84144814e199dca1`;

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
    return data;
  } catch (error) {
    console.log("Error:", error);
    throw error;
  }
}

function clearPreviousSearch() {
  let container = document.getElementById("container");
  container.innerHTML = "";
}

export default Header;
