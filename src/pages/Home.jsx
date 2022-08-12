import React, { useState } from "react";
// import DateRangePicker from "@wojtekmaj/react-daterange-picker";
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
      name: "Office Chair",
      id: "1",
      img:
        "https://www.officegapsupplymalaysia.com/wp-content/uploads/2018/12/WhatsApp-Image-2018-12-12-at-11.54.21-AM-5-768x768.jpeg",
      price: "50",
      des: "Office Mesh Chair Model : KT-PMC4(B)",
      rate: {
        point: 4,
        count: 100,
      },
    },
    {
      name: "Office Desk",
      id: "2",
      img:
        "https://secure.img1-fg.wfcdn.com/im/94368078/compr-r85/5800/58003400/default.jpg",
      price: "37",
      des: "LARGE DESKS | FREE SHIPPING OVER",
      rate: {
        point: 3.5,
        count: 20,
      },
    },
    {
      name: "Office Cabinet",
      id: "3",
      img:
        "https://cdn.shopify.com/s/files/1/0267/6850/7073/products/42_419aaaff-b798-400c-b554-45b7e268ae89_740x.png?v=1637294455",
      price: "62",
      des: "Frans Office File Cabinet 2 Door 2 Drawer Storage Organization",
      rate: {
        point: 5,
        count: 7,
      },
    },
    {
      name: "Office Copy Machine",
      id: "4",
      img: "https://m.media-amazon.com/images/I/81-asnrclJL._AC_SY679_.jpg",
      price: "980",
      des: "Xerox Workcentre 7545 Color Copier Machine",
      rate: {
        point: 3,
        count: 306,
      },
    },
  ];

  return (
    <div className="py-3">
      {/* <div className="text-center mb-5">
        <DateRangePicker />
      </div> */}
      <div className="container mb-5">
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
