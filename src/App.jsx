import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Header";

import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderMain from "./components/HeaderMain";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div className="App">
     

         <Login />
      </div>

    </div> */
}
