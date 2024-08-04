import React from "react";
import Shop_products from "../../components/Shop_components/shop_products";
import Shop_sidebar from "../../components/Shop_components/shop_sidebar";
function Shop() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Shop_sidebar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Shop_products />
      </div>
    </div>
  );
}

export default Shop;
