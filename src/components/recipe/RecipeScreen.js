import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const RecipeScreen = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const [recipes, setRecipes] = React.useState(null);

  React.useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios
      .get("https://recipes-api-carlos.herokuapp.com/api/recipes/")
      .then((response) =>
        setRecipes(response.data.recipes.filter((res) => res._id == _id))
      );
    // empty dependency array means this effect will only run once (like  componentDidMount in classes)
  }, []);

  if (!recipes) {
    return null;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">
              {recipes[0].title}
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-2 text-base font-bold flex items-center justify-center lg:justify-start text-green-600">
              {recipes[0].category}
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              Description: {recipes[0].description}
            </p>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              Ingredients:
            </p>
            <p className="pt-1 text-sm">{recipes[0].ingredients}</p>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              Process:
            </p>
            <p className="pt-1 text-sm">{recipes[0].process}</p>
            <div className="pt-12 pb-8">
              <button
                className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleReturn}
              >
                Go back
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            src={recipes[0].image}
            className="rounded-none lg:rounded-lg shadow-2xl lg:block"
          />
        </div>
      </div>
    </div>
  );
};
