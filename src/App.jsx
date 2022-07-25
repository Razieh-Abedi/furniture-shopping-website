import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";

function App() {
  const [favorites, setFavorites] = useState(0);
  const addToFavorites = () => {
    setFavorites = favorites + 1;
  };
  return (
    <BrowserRouter>
      <Header addToFavorites={addToFavorites} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
