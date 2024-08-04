import React, { useRef, useState } from "react";
import "./shop_card.css";
import WishList_icon from "../../images/icons/wishlist.svg";
import WishList_icon_filled from "../../images/icons/wishlist_filled.svg";
import Add_icon from "../../images/icons/add.svg";
import Minus_icon from "../../images/icons/minus.svg";

function Shop_card(props) {
  const { source, title, brand, price } = props;
  const [wishlist, setWishlist] = useState(WishList_icon);
  const [clicked, setClicked] = useState(false); // Track whether the icon is clicked
  const [item, setitem] = useState(0);
  const [stock_style, setstock_style] = useState({ display: "none" });

  const item_add = () => {
    setitem(item + 1);
    if (item >= 0) {
      setstock_style({ display: "block" });
    }
  };

  const item_dec = () => {
    if (item <= 1) {
      setstock_style({ display: "none" });
      setitem(0);
    }
    setitem(item - 1);
  };

  const handleClick = () => {
    setClicked(!clicked);
    setWishlist(clicked ? WishList_icon : WishList_icon_filled);
  };

  return (
    <div className="product_card">
      <div className="top_shop_card">
        <img
          src={wishlist}
          alt="Wishlist"
          onClick={handleClick}
          className={`Wishlist_svg_icon ${clicked ? "clicked" : ""}`}
        />
        <a href="#" style={stock_style} className="shop_card_Buy_Now">Buy Now</a>
      </div>
      <div className="container_product_image">
        <img src={source} alt="Product_image" className="product_image" />
      </div>
      <p className="product_id">{title}</p>
      <p>{brand}</p>
      <div className="user_add_price">
        <p>{price}</p>
        <div className="user_controle_stock">
          <img
            src={Minus_icon}
            alt="minus"
            className="Add_svg_icon"
            onClick={item_dec}
            style={stock_style}
          />
          <p className="user_cart_controle" style={stock_style}>
            {item}
          </p>
          <img
            src={Add_icon}
            alt="plus_icon"
            className="Add_svg_icon"
            onClick={item_add}
          />
        </div>
      </div>
    </div>
  );
}

export default Shop_card;
