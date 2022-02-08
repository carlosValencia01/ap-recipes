import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-400 border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to={`/`} className="flex">
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-gray-600 hover:text-gray-800">
            Home
          </span>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to={`/new`} className="flex">
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-gray-600 hover:text-gray-800">
                  New Recipe
                </span>
              </Link>
            </li>
            <li>
              <Link to={`/login`} className="flex">
                <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-gray-600 hover:text-gray-800">
                  Login
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
