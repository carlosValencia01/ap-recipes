import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainScreen } from "../main/MainScreen";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
