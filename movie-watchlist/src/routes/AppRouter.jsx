import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Stats from "../pages/Stats";
import MainLayout from "../layouts/MainLayout";
import Counter from "../components/Counter";

//props - Parent -> Child
function AppRouter() {
  return (
    <>
      <Router>
        <MainLayout>
          {/* props as children */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/stats" element={<Stats />} />
            <Route
              path="/counter"
              element={<Counter initialValue={0} incrementValue={5} />}
            />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
}

export default AppRouter;

// default export - while import the file, you can use any name
// named export - while import the file, you have to use the same name
