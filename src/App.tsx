import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, NavBar } from "./components/molcules";
import GlobalStyle from "./GlobalStyle";

import Main from "./pages/Main";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}
