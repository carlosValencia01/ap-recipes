import React from "react";
import axios from "axios";

export const MainRecipeList = () => {
  const [recipes, setRecipes] = React.useState(null);

  React.useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://recipes-api-carlos.herokuapp.com/api/recipes/")
      .then((response) => setRecipes(response.data.recipes));
    // empty dependency array means this effect will only run once (like  componentDidMount in classes)
  }, []);

  if (!recipes) {
    return null;
  }

  return (
    <div>
      {recipes.map((recipe) => {
        console.log(recipe.title);
      })}
    </div>
  );
};
