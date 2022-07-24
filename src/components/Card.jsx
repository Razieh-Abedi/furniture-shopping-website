import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function Card({ id, img, price, name, des }) {
  return (
    <div className="card" id={id}>
      <img
        src={img}
        className="card-img-top h-100 w-100"
        alt="image of a hotel room"
      />
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{name}</h5>
          <a href="#" className="text-danger">
            <FaRegHeart />
          </a>
          <a href="#" className="text-danger">
            <FaHeart />
          </a>
        </div>

        <p className="card-text">{des}</p>
        <p>Price: {price} $</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
export default Card;
