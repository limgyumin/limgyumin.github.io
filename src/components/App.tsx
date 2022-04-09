import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import * as Pages from "@/pages";

import Header from "./Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Pages.Main />} />
        <Route path="/post/:id" element={<Pages.PostDetail />} />
        <Route path="/search" element={<Pages.Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
