import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";

function App() {
  const [favorites, setFavorites] = useState(0);
  const increaseFavorites = () => {
    setFavorites(favorites + 1);
  };
  const decreaseFavorites = () => {
    setFavorites(favorites - 1);
  };
  const [cartProducts, setCartProducts] = useState(0);
  const increaseCartProducts = () => {
    setCartProducts(cartProducts + 1);
  };
  const decreaseCartProducts = () => {
    setCartProducts(cartProducts - 1);
  };

  return (
    <BrowserRouter>
      <Header favorites={favorites}  cartProducts={cartProducts}/>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              increaseFavorites={increaseFavorites}
              decreaseFavorites={decreaseFavorites}
              increaseCartProducts={increaseCartProducts}
              decreaseCartProducts={decreaseCartProducts}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
