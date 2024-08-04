import React, { useState, useEffect } from "react";
import m1 from "../../images/model_images/m1.png";
import m2 from "../../images/model_images/m2.png";
import m3 from "../../images/model_images/m3.png";
import m4 from "../../images/model_images/m4.png";

function FashionModel() {
  const Fmodel = [m1, m2, m3, m4];
  const [fm, setFm] = useState(0);

  // Update the image index (e.g., on timer)
  useEffect(() => {
    const timer = setTimeout(() => {
      setFm((prevIndex) => (prevIndex + 1) % Fmodel.length);
    }, 2000);

    // Clear the timeout when the component is unmounted or the effect is re-run
    return () => clearTimeout(timer);
  }, [fm]);

  return (
    <div>
      <img
        src={Fmodel[fm]}
        alt="model image"
        style={{
          objectFit: "cover", // Use 'cover' to crop the image
          width: "100%",
          height: "auto", // Set a fixed height for the container
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default FashionModel;
