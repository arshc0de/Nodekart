import React from "react";
import L1 from "../../images/brand_logo/l1.png";
import L2 from "../../images/brand_logo/l2.png";
import L3 from "../../images/brand_logo/l3.png";
import L4 from "../../images/brand_logo/l4.png";
import L5 from "../../images/brand_logo/l5.png";
function Brand_band() {
  const brand_logo = [L1, L2, L3, L4, L5];
  return (
    <div
      id="brand_band"
      style={{
        backgroundColor: "black",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
      }}
    >
      {brand_logo.map((ele) => (
        <img
          src={ele}
          alt="brand logo"
          style={{
            filter: "invert(100%) grayscale(100%)",
            height: "30px",
            margin: "10px",
            marginLeft: "40px",
            marginRight: "40px",
            width: "auto",
            objectFit: "contain",
          }}
        />
      ))}
    </div>
  );
}

export default Brand_band;
