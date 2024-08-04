import React from "react";
import Banner from "../../components/Home_components/banner";
import Arrivals from "../../components/Home_components/new_arrival";
import Style_by_event from "../../components/Home_components/Style_by_event";
import Customer_review from "../../components/Home_components/customer_review";
import Newsletter_request from "../../components/Home_components/newsletter_request";
function Home() {
  return (
    <div>
      <Banner />
      <Arrivals />
      <Style_by_event />
      <Customer_review />
      <Newsletter_request />
    </div>
  );
}

export default Home;
