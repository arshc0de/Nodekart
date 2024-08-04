import React from "react";
import Arrival_card from "./arrival_card";
import p1 from "../../images/product_images/p1.jpg";
import p2 from "../../images/product_images/p2.jpg";
import p3 from "../../images/product_images/p3.jpg";
import p4 from "../../images/product_images/p4.jpg";
import p5 from "../../images/product_images/p5.jpg";

function Arrivals() {
  const new_arrival_style = {
    textAlign: "center",
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: "100px",
  };
  const new_arrival_card = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const products = [
    {
      product_image: p1,
      product_title: "GUCCI Jacket",
      product_rating: 4.5,
      product_price: 150,
    },
    {
      product_image: p2,
      product_title: "ZARA Skirt",
      product_rating: 4,
      product_price: 195,
      product_previousP: 300,
    },
    {
      product_image: p3,
      product_title: "VERSACE Jacket with boots",
      product_rating: 4,
      product_price: 290,
    },
    {
      product_image: p4,
      product_title: "CalvinKlein Jacket",
      product_rating: 4,
      product_price: 170,
    },
    {
      product_image: p5,
      product_title: "ZARA Cap vintage",
      product_rating: 5,
      product_price: 60,
    },
  ];
  return (
    <div>
      <p style={new_arrival_style}>New Arrivals</p>
      <div style={new_arrival_card}>
        {products.map((item) => (
          <Arrival_card
            key={item.id} // Add a unique key for each product
            link={item.product_image}
            title={item.product_title}
            rating={item.product_rating}
            price={item.product_price}
            previous_price={item.product_previousP}
            discount={
              item.product_previousP > 0
                ? ((item.product_previousP - item.product_price) /
                    item.product_previousP) *
                    100 +
                  "%Off"
                : "" // Handle cases where previous price is zero
            }
          />
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: '10px'
        }}
      >
        <a
          href="#"
          style={{
            padding: "10px",
            border: "1px solid black",
            textDecoration: "none",
            borderRadius: "20px",
            fontSize: "20px",
            width: "fit-content",
          }}
        >
          view all
        </a>
      </div>
    </div>
  );
}

export default Arrivals;
