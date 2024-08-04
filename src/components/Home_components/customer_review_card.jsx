import React from "react";
import rate_icon from "../../images/icons/rating.svg";
import verfied_icon from "../../images/icons/verified.svg";

function Customer_review_card(props) {
  const { rating, profile, title, description } = props;
  const n_rate = [];
  const rating_show = (rating) => {
    for (var i = 0; i <= rating; i++) {
      n_rate.push(rate_icon);
    }
  };
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <div id="rating">
        {rating_show(rating)}
        {n_rate.map((icon) => (
          <img
            src={icon}
            style={{
              height: "20px",
              width: "18px",
            }}
            alt="rating"
          />
        ))}
      </div>
      <p
        style={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <img
          src={profile}
          alt="user profile pic"
          style={{
            height: "50px",
            width: "50px",
            margin: "20px",
            borderRadius: "100px",
          }}
        />
        <img
          src={verfied_icon}
          alt=""
          style={{ height: "20px", width: "20px" }}
        />
        {title}
      </p>
      <p>{description}</p>
    </div>
  );
}

export default Customer_review_card;
