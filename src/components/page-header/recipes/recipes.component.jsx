const Recipes = ({ result }) => {
  function showData() {
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i].title);
    }
  }
  showData();

  return <div>Recipes {JSON.stringify(result)}</div>;
};
export default Recipes;
