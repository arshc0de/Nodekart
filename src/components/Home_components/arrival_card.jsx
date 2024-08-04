import React from "react";
import rate_icon from "../../images/icons/rating.svg";
import "./arrival_card.css";
function Arrival_card(props) {
  const { link, title, rating, price,previous_price,discount} = props;
  const n_rate = [];
  const rating_show = (rating) => {
    for (var i = 0; i <= rating; i++) {
      n_rate.push(rate_icon);
    }
  };
  console.log(n_rate);
  return (
    <div className="card_product">
      <img
        src={link}
        style={{
          objectFit: "contain",
          width: "auto",
          height: "300px",
          borderRadius: "10px",
          textAlign: "center",
        }}
        alt="product image"
      />
      <p style={{ fontWeight: "bold", fontSize: "18px" }}>{title}</p>
      <p
        style={{
          fontWeight: "100px",
          fontSize: "14px",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        {rating_show(rating)}
        {n_rate.map((icon) => (
          <div className="Container_image_arrival">
          <img
            src={icon}
            style={{ height: "20px", width: "18px", margin: "4px", fontWeight: '200px'}}
            alt="rating"
          />
          </div>
        ))}
        {rating}
      </p>
      <p style={{ fontWeight: "bold", fontSize: "20px" }}>${price}<span style={{textDecoration:'line-through',color:'gray',marginLeft: '4px',marginRight: '4px',fontWeight: '10px'}}>{previous_price}</span><span style={{color: 'red',borderRadius: '10px',fontSize:'14px'}}>{discount}</span></p>
    </div>
  );
}

export default Arrival_card;
