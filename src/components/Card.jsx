import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Card({ id, img, price, name, des, addToFavorites }) {
  const [heartState, setHeartState] = useState(true);
  const changeHeartIcon = () => {
    setHeartState(!heartState);
  };
  const heartIcon = heartState ? <FaRegHeart /> : <FaHeart />;
  const [likes, setLikes] = useState(100);
  const addLikes = () => {
    setLikes(likes + 1);
  };

  const likesCount = likes == 100 ? addLikes : 100;
  //   const changeLikes = ()=> {
  // setLikes(likes+1)
  //   }
  const [borderState, setBorderState] = useState(false);
  const changeStyle = () => {
    setBorderState(!borderState);
  };
  const borderStyle = {
    border: borderState ? "2px solid green" : "1px solid black",
  };
  const [cartState, setCartState] = useState(false);
  const changeCart = () => {
    setCartState(!cartState);
  };
  const [cartNumberState, setCartNumberState] = useState(false);
  const changeCartNumber = () => {
    setCartNumberState(!cartNumberState);
  };
  const cartNumberStyle = {
    display: cartState ? "flex" : "none",
  };

  const [cartCountState, setCartCountState] = useState(1);
  const addCartCount = () => {
    setCartCountState(cartCountState + 1);
  };
  const [cartMinusState, setCartMinusState] = useState(cartCountState);
  const subtractCartCount = () => {
    setCartMinusState(cartMinusState - 1);
  };

  const heartClick = () => {
    addLikes();
    addToFavorites();
    changeHeartIcon();
  };

  return (
    <div
      className="card text-center"
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
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{name}</h5>
          <a href="#" className="text-danger" onClick={heartClick}>
            {heartIcon}
          </a>
          <div className="likes">Liked by: {likesCount}</div>
        </div>
        <p className="card-text">{des}</p>
        <p>Price: {price} $</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
        <div>
          <div className="m-3">
            <button
              className={`bg-success rounded-2  border-0 fs-5 m-auto w-100 ${
                cartState ? "d-none" : "d-block"
              }`}
              onClick={changeCart}
            >
              Add To Cart
            </button>
            <div
              // className={`"justify-content-between" ${
              //   cartCountState == 0 ? "d-none" : "d-flex"
              // }`}
              style={cartNumberStyle}
              onClick={changeCartNumber}
            >
              <button
                className="bg-danger rounded-2 px-3  m-2 fs-3"
                onClick={subtractCartCount}
              >
                -
              </button>
              <span className="bg-light rounded-2 px-3  m-2 fs-3">
                {cartCountState}
              </span>
              <button
                className="bg-primary rounded-2 px-3  m-2 fs-3"
                onClick={addCartCount}
              >
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
