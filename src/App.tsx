import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Main from "./pages/Main";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}
