import React from "react";
import { Link } from "react-router-dom";

export const RecipeCard = ({ title, image, category, _id }) => {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <p className="mt-1 text-sm text-gray-500">{title}</p>
        </div>
        <div>
          <Link
            to={`/recipe/${_id}`}
            className="p-1 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300"
          >
            Read
          </Link>
        </div>
      </div>
      <p className="text-sm font-bold text-green-600">{category}</p>
    </div>
  );
};
