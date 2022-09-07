import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import QtyTotalContext from "./contexts/QtyTotalContext";

function App() {
  const [favorites, setFavorites] = useState(0);
  const [qtyTotal, setQtyTotal] = useState(0);

  const increaseFavorites = () => {
    setFavorites(favorites + 1);
  };
  const decreaseFavorites = () => {
    setFavorites(favorites - 1);
  };


  return (
    <QtyTotalContext.Provider value={[qtyTotal, setQtyTotal]}>
      <BrowserRouter>
        <Header favorites={favorites} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                increaseFavorites={increaseFavorites}
                decreaseFavorites={decreaseFavorites}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QtyTotalContext.Provider>
  );
}

export default App;
