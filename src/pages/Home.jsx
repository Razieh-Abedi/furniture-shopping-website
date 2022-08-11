import React, { useState } from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import Card from "../components/Card";

function Home({
  increaseFavorites,
  decreaseFavorites,
  increaseCartProducts,
  decreaseCartProducts,
}) {
  // const [value, onChange] = useState([new Date(), new Date()]);
  // onChange={onChange} value={value}
  const products = [
    {
      name: "Single Room",
      id: "single-room",
      img:
        "https://www.berjayahotel.com/sites/default/files/hotel-room-type/london/c1-classic-single-room.jpg",
      price: "20",
      des: "This is the description for a single room",
      rate: {
        point: 4,
        count: 100,
      },
    },
    {
      name: "Double Room",
      id: "double-room",
      img:
        "https://www.princehotels.com/tokyo/wp-content/uploads/sites/9/2019/07/14_tokyo-prince-hotel-rooms-4-8FSuperiorTwinRoom-noon-.jpg",
      price: "40",
      des: "This is the description for a double room",
      rate: {
        point: 3.5,
        count: 20,
      },
    },
    {
      name: "Queen Room",
      id: "queen-room",
      img: "https://sierrahotel.ph/v2/wp-content/uploads/room-queenroom.jpg",
      price: "60",
      des: "This is the description for a queen room.",
      rate: {
        point: 5,
        count: 7,
      },
    },
    {
      name: "King Room",
      id: "king-room",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-s/01/e2/a5/86/hotel-room-with-king.jpg",
      price: "80",
      des: "This is the description for a king room.",
      rate: {
        point: 3,
        count: 306,
      },
    },
  ];

  return (
    <div>
      <div className="text-center">
        <DateRangePicker  />
      </div>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          {products.map((item) => (
            <Card
              key={item.id}
              // name={item.name}
              // id={item.id}
              // price={item.price}
              // des={item.des}
              // img={item.img}
              {...item}
              increaseFavorites={increaseFavorites}
              decreaseFavorites={decreaseFavorites}
              increaseCartProducts={increaseCartProducts}
              decreaseCartProducts={decreaseCartProducts}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
