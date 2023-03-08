import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import View1 from "./View1/View1";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/view1" element={<View1 />} />
  </Routes>
);

export default Router;
