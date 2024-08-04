import React from "react";
import Style_event_card from "./Style_event_card";
import baby from "../../images/event_images/baby.jpg";
import formal from "../../images/event_images/formal.jpg";
import gym from "../../images/event_images/gym.jpg";
import mariggew from "../../images/event_images/mariggew.jpg";
import marrige from "../../images/event_images/marrige.jpg";
function Style_by_event() {
  const event_data = [
    {
      image_source: baby,
      event_title: "Baby",
    },
    {
      image_source: formal,
      event_title: "Formals",
    },
    {
      image_source: gym,
      event_title: "GYM",
    },
    {
      image_source: mariggew,
      event_title: "Weeding",
    },
    {
      image_source: marrige,
      event_title: "Dress",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        padding: "20px",
        marginLeft: "100px",
        marginRight: "100px",
        borderRadius: "20px",
      }}
    >
      <p
        style={{
          fontFamily: "Bebas Neue",
          fontSize: "80px",
          textAlign: 'center'
        }}
      >
        DIFFRENT DRESS STYLE
      </p>
      <div
        style={{
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {event_data.map((item) => (
          <Style_event_card
            image_link={item.image_source}
            title={item.event_title}
          />
        ))}
      </div>
    </div>
  );
}

export default Style_by_event;
