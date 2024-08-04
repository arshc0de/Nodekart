import React from "react";
import './style_event_card.css'

function Style_event_card(props) {
  const { image_link, title } = props;
  const style_card_event = {
    backgroundImage: `url(${image_link})`,
    backgroundSize: "cover", // Maintain aspect ratio
    backgroundRepeat: "no-repeat",
    height: "400px", // Set a fixed height
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
    width: "auto",
    objectFit: "contain"
  };

  return (
    <div style={style_card_event} className="card_container_bg">
      <p style={{ fontSize: "80px", fontWeight: "bold", color: "white" ,margin: '10px'}}>
        {title}
      </p>
    </div>
  );
}

export default Style_event_card;
