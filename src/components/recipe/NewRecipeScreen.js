import React from "react";
import { useForm } from "../hooks/useForm";
import axios from "axios";

export const NewRecipeScreen = () => {
  const [formValues, handleInputChange] = useForm({
    title: "",
    category: "",
    ingredients: "",
    process: "",
    image: "",
    description: "",
  });

  const { title, category, ingredients, process, image, description } =
    formValues;

  const recipe = {
    title: title,
    ingredients: ingredients,
    process: process,
    image: image,
    description: description,
    rate: "2",
    author_id: "123jhj132jk134hjasdf",
    category: category,
  };

  const postData = () => {
    axios
      .post("https://recipes-api-carlos.herokuapp.com/api/recipes", recipe)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-5/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <form onSubmit={handleRegister}>
              <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-green-600">
                New Recipe
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>

              <p className="pt-2 text-2xl font-bold flex items-center justify-center lg:justify-start ">
                Title
              </p>

              <input
                className="border-gray-300 mb-4 w-96 border-solid border rounded py-2 px-4"
                type="text"
                placeholder="Name"
                name="title"
                value={title}
                onChange={handleInputChange}
              />

              <p className="pt-2 text-2xl font-bold flex items-center justify-center lg:justify-start ">
                Category
              </p>

              <select
                className="pt-1 pb-1 border-gray-300 mb-4 w-96 border-solid border rounded py-2 px-4"
                name="category"
                value={category}
                onChange={handleInputChange}
              >
                <option hidden defaultValue="">
                  Select a category
                </option>
                <option value="Food">Food</option>
                <option value="Vegan">Vegan</option>
                <option value="Dessert">Dessert</option>
                <option value="Dinner">Dinner</option>
                <option value="Breakfast">Breakfast</option>
              </select>

              <p className="pt-4 text-2xl font-bold flex items-center justify-center lg:justify-start ">
                Ingredients
              </p>

              <textarea
                className="border-gray-300 mb-4  h-48 w-96 border-solid border rounded py-2 px-4"
                placeholder="Ingredients"
                name="ingredients"
                value={ingredients}
                onChange={handleInputChange}
              />

              <p className="pt-2 text-2xl font-bold flex items-center justify-center lg:justify-start ">
                Process
              </p>

              <textarea
                className="border-gray-300 mb-4  h-48 w-96 border-solid border rounded py-2 px-4"
                placeholder="Process"
                name="process"
                value={process}
                onChange={handleInputChange}
              />

              <p className="pt-2 text-2xl font-bold flex items-center justify-center lg:justify-start ">
                Image
              </p>

              <input
                className="border-gray-300 mb-4 w-96 border-solid border rounded py-2 px-4"
                type="text"
                placeholder="Image url"
                name="image"
                value={image}
                onChange={handleInputChange}
              />

              <p className="pt-2 text-2xl font-bold flex items-center justify-center lg:justify-start ">
                Description
              </p>

              <textarea
                className="border-gray-300 mb-4  h-28 w-96 border-solid border rounded py-2 px-4"
                placeholder="Description"
                name="description"
                value={description}
                onChange={handleInputChange}
              />

              <div className="pt-4 pb-8 pl-3">
                <button
                  className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
