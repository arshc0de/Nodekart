import React from "react";
import Footer_card from "./footer_card";

function Footer() {
  const footer_data = [
    {
      footer_heading: "ABOUT US",
      footer_point1: "Company Info",
      footer_point2: "Careers",
      footer_point3: "Press Releases",
      footer_point4: "Investor Relations",
    },
    {
      footer_heading: "CONTACT",
      footer_point1: "Email Us",
      footer_point2: "Call Us",
      footer_point3: "Store Locator",
      footer_point4: "Feedback",
    },
    {
      footer_heading: "SOCIAL MEDIA",
      footer_point1: "Facebook",
      footer_point2: "Instagram",
      footer_point3: "Twitter",
      footer_point4: "LinkedIn",
    },
    {
      footer_heading: "POLICIES",
      footer_point1: "Return Policy",
      footer_point2: "Shipping Policy",
      footer_point3: "Security Policy",
      footer_point4: "Affiliate Program",
    },
    {
      footer_heading: "SERVICES",
      footer_point1: "Gift Cards",
      footer_point2: "Personal Shopper",
      footer_point3: "Size Guide",
      footer_point4: "Store Events",
    },
    {
      footer_heading: "HELP",
      footer_point1: "Customer support",
      footer_point2: "Delivery Details",
      footer_point3: "Terms and Conditions",
      footer_point4: "Privacy Policy",
    },
    {
      footer_heading: "FAQ",
      footer_point1: "Account",
      footer_point2: "Manage Deliveries",
      footer_point3: "Orders",
      footer_point4: "Payments",
    },
    {
      footer_heading: "RESOURCES",
      footer_point1: "Development Tutorial",
      footer_point2: "Manage Deliveries",
      footer_point3: "How to-Blog",
      footer_point4: "YouTube Playlist",
    },
  ];

  return (
    <div style={{backgroundColor: "rgb(240, 240, 240)"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {footer_data.map((ele, index) => (
          <Footer_card
            key={index}
            title={ele.footer_heading}
            point1={ele.footer_point1}
            point2={ele.footer_point2}
            point3={ele.footer_point3}
            point4={ele.footer_point4}
          />
        ))}
      </div>
      <hr style={{backgroundColor:'grey',marginLeft:'20px',marginRight:'20px'}}/>
      <p id="copyright" style={{textAlign:'center',padding:'10px',color:'grey'}}>All CopyRight Reserved © 2024</p>
    </div>
  );
}

export default Footer;
