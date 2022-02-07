import React from "react";

export const RecipeCard = ({ title, image, category }) => {
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
      </div>
      <p className="text-sm font-medium text-gray-900">{category}</p>
    </div>
  );
};
