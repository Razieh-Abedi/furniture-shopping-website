import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import DateRangePicker from "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.js";
// import "wojtekmaj/react-daterange-picker/dist/DateRangePicker.cc";
debugger;
function App() {
  const products = [
    {
      name: "Single Room",
      id: "single-room",
      img:
        "https://www.berjayahotel.com/sites/default/files/hotel-room-type/london/c1-classic-single-room.jpg",
      price: "20",
      des: "This is the description for a single room",
    },
    {
      name: "Double Room",
      id: "double-room",
      img:
        "https://hotel.hollaramconcept.com/storage/rooms/double-bedded-room-standard.jpg",
      price: "40",
      des: "This is the description for a double room",
    },
    {
      name: "Queen Room",
      id: "queen-room",
      img: "https://sierrahotel.ph/v2/wp-content/uploads/room-queenroom.jpg",
      price: "60",
      des: "This is the description for a queen room.",
    },
    {
      name: "King Room",
      id: "king-room",
      img:
        "https://media-cdn.tripadvisor.com/media/photo-s/01/e2/a5/86/hotel-room-with-king.jpg",
      price: "80",
      des: "This is the description for a king room.",
    },
  ];

  return (
    <div className="App">
      <Header />
      <div>
        <DateRangePicker />
      </div>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          {products.map((item) => (
            <Card
              name={item.name}
              id={item.id}
              price={item.price}
              des={item.des}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
