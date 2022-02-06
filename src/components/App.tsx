import React, { ReactElement } from "react";
import { Routes, Route } from "react-router-dom";

import * as Pages from "@/pages";

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Pages.Main />} />
    </Routes>
  );
}

export default App;
