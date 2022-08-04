import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Card({ id, img, price, name, des, rate, addToFavorites }) {
  // To change the heart icon when liked
  const [heartState, setHeartState] = useState(false);
  const changeHeartIcon = () => {
    setHeartState(!heartState);
  };
  const heartIcon = heartState ? <FaHeart /> : <FaRegHeart />;

  // To set the number of likes
  const [likes, setLikes] = useState(rate.count);
  const changeLikes = () => {
    if (!heartState) {
      setLikes(likes + 1);
    } else {
      setLikes(rate.count);
    }
  };
  const heartClick = () => {
    changeLikes();
    addToFavorites();
    changeHeartIcon();
  };
  // To change the border color of the card when clicked on
  const [borderState, setBorderState] = useState(false);
  const changeStyle = () => {
    setBorderState(!borderState);
  };
  const borderStyle = {
    border: borderState ? "2px solid green" : "1px solid black",
  };
  //To show/hide the description when clicked on read more button
  const [productDes, setProductDes] = useState(false);
  const desDisplay = () => {
    setProductDes(!productDes);
  };
  const desStyle = {
    display: productDes ? "block" : "none",
    marginTop: "12px",
  };
  //To show the number section when clicked on add to cart button
  const [cartNumberState, setCartNumberState] = useState(false);
  const cartNumberStyle = {
    display: cartNumberState ? "flex" : "none",
    justifyContent: "center",
  };
  //To add the quantity in the cart
  const [qty, setQty] = useState(0);
  const addCartCount = () => {
    setQty(qty + 1);
  };
  //To subtract the quantity in the cart and hide the number section when the cart is empty
  const subtractCartCount = () => {
    if (qty <= 1) {
      //1
      setTimeout(() => {
        setCartNumberState(false);
      }, 500);
    }
    setQty(qty - 1); //0
  };
  const clickedOnAddToCart = () => {
    addCartCount();
    setCartNumberState(true);
  };

  return (
    <div className="col">
      <div
        className="card text-center h-100"
        id={id}
        style={borderStyle}
        onClick={changeStyle}
      >
        <img
          src={img}
          className="card-img-top h-100 w-100"
          alt="image of a hotel room"
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <div className="d-flex justify-content-center my-2">
            <a href="#" className="text-danger mx-2 " onClick={heartClick}>
              {heartIcon}
            </a>
            <div className="likes">Liked by: {likes}</div>
          </div>
          <p>Price: {price} $</p>
          <p className="card-text">{des}</p>
          <button className="btn btn-info" onClick={desDisplay}>
            Read More
          </button>
          <p style={desStyle}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem distinctio, voluptate quisquam numquam blanditiis
            repellendus ea consequatur. Repudiandae quasi, quis vero cum fugit
            nulla error consequuntur, quo nobis, hic voluptatem.
          </p>
          <div>
            <button
              className={`btn btn-warning mx-auto w-100 my-2
                 ${cartNumberState ? "d-none" : "d-block"}`}
              onClick={clickedOnAddToCart}
            >
              Add To Cart
            </button>
            <div style={cartNumberStyle} className="my-2">
              <button
                className="btn btn-warning px-3 fs-3"
                onClick={subtractCartCount}
              >
                -
              </button>
              <span className="btn btn-light px-3 fs-4">{qty}</span>
              <button className="btn btn-info px-3 fs-3" onClick={addCartCount}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
