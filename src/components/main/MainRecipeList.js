import React from "react";
import axios from "axios";
import { RecipeCard } from "../shared/RecipeCard";
import { Link } from "react-router-dom";

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
    <div className="bg-white">
      <div className="max-w-2xl mx-auto  px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <Link
          to={`/category/Food`}
          className="p-1 pl-5 pr-5 mr-2 bg-green-700 hover:bg-green-900 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
        >
          Food
        </Link>

        <Link
          to={`/category/Vegan`}
          className="p-1 pl-5 pr-5 mr-2 bg-green-700 hover:bg-green-900 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
        >
          Vegan
        </Link>

        <Link
          to={`/category/Dessert`}
          className="p-1 pl-5 pr-5 mr-2 bg-green-700 hover:bg-green-900 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
        >
          Dessert
        </Link>

        <Link
          to={`/category/Dinner`}
          className="p-1 pl-5 pr-5 mr-2 bg-green-700 hover:bg-green-900 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
        >
          Dinner
        </Link>

        <Link
          to={`/category/Breakfast`}
          className="p-1 pl-5 pr-5 mr-2 bg-green-700 hover:bg-green-900 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
        >
          Breakfast
        </Link>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-gray-900">
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
