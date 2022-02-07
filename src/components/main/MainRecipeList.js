import React from "react";
import axios from "axios";
import { RecipeCard } from "../shared/RecipeCard";

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

  // {
  //   recipes.map((recipe) => {
  //     <RecipeCard key={recipe._id} {...recipe} />;
  //   });
  // }

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Popular Recipes
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              {...recipe}
              className="group relative"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
