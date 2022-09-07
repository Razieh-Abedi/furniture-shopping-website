import React, { useState } from "react";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import Card from "../components/Card";
import productsData from "../data/productsData";

function Home({
  increaseFavorites,
  decreaseFavorites,

}) {
  // const [value, onChange] = useState([new Date(), new Date()]);
  // onChange={onChange} value={value}
 

  return (
    <div className="py-3">
      {/* <div className="text-center mb-5">
        <DateRangePicker />
      </div> */}
      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          { productsData.map((item) => (
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
