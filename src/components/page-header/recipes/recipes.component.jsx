const Recipes = ({ result }) => {
  function showData() {
    let container = document.getElementById("container");
    // container.innerHTML = "";
    for (let i = 0; i < result.length; i++) {
      let recipe = document.createElement("div");
      recipe.id = result[i].id;

      let title = document.createElement("h2");
      title.textContent = result[i].title;
      console.log(title);
      recipe.appendChild(title);
      let image = document.createElement("img");
      image.src = result[i].image;
      recipe.appendChild(image);
      container.appendChild(recipe);
    }
  }

  return <div>{showData()}</div>;
};
export default Recipes;
