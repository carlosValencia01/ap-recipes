import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListCategoryScreen } from "../category/ListCategoryScreen";
import { MainScreen } from "../main/MainScreen";
import { NewRecipeScreen } from "../recipe/NewRecipeScreen";
import { RecipeScreen } from "../recipe/RecipeScreen";
import { Navbar } from "../ui/Navbar";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/recipe/:_id" element={<RecipeScreen />} />
          <Route path="/new" element={<NewRecipeScreen />} />
          <Route path="/category/:category" element={<ListCategoryScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
