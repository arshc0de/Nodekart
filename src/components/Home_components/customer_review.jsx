import React,{useState} from "react";
import Customer_review_card from "./customer_review_card";
import left_icon from '../../images/icons/left.svg'
import right_icon from '../../images/icons/right.svg'
import './customer_review.css'
import Roger from '../../images/profile_images/Roger.jpg'
import Alice from '../../images/profile_images/Alice.jpg'
import Michael from '../../images/profile_images/Michael.jpg'
import Sophia from '../../images/profile_images/Sophia.jpg'
import David from '../../images/profile_images/David.jpg'
import Emma from '../../images/profile_images/Emma.jpg'
import Oliver from '../../images/profile_images/Oliver.jpg'
import Lucas from '../../images/profile_images/Lucas.jpg'

function Customer_review() {
  const customer_data = [
    {
      customer_rating: 4,
      customer_name: "Roger",
      customer_profile: Roger,
      customer_desc:
        "Roger is a frequent buyer of electronics and sports equipment. He appreciates fast shipping and reliable customer service.",
    },
    {
      customer_rating: 5,
      customer_name: "Alice",
      customer_profile: Alice,
      customer_desc:
        "Alice loves shopping for fashion and accessories. She enjoys finding unique items and appreciates detailed product descriptions.",
    },
    {
      customer_rating: 3,
      customer_name: "Michael",
      customer_profile: Michael,
      customer_desc:
        "Michael often buys home improvement tools and gadgets. He values competitive pricing and clear return policies.",
    },
    {
      customer_rating: 2,
      customer_name: "Sophia",
      customer_profile: Sophia,
      customer_desc:
        "Sophia shops for beauty products and skincare items. She prefers eco-friendly products and expects thorough ingredient information.",
    },
    {
      customer_rating: 4,
      customer_name: "David",
      customer_profile: David,
      customer_desc:
        "David frequently purchases books and educational materials. He likes having access to a wide selection and user reviews.",
    },
    {
      customer_rating: 5,
      customer_name: "Emma",
      customer_profile: Emma,
      customer_desc:
        "Emma enjoys buying kitchenware and cooking gadgets. She appreciates detailed product descriptions and customer photos.",
    },
    {
      customer_rating: 3,
      customer_name: "Oliver",
      customer_profile: Oliver,
      customer_desc:
        "Oliver is a tech enthusiast who buys the latest gadgets and accessories. He values product durability and customer support.",
    },
    {
      customer_rating: 4,
      customer_name: "Lucas",
      customer_profile: Lucas,
      customer_desc:
        "Lucas frequently purchases outdoor gear and sportswear. He likes finding good deals and reading customer feedback.",
    },
  ];

  console.log(customer_data.length);

  const [position, setPosition] = useState(0);

  const leftPosition = () => {
    setPosition((prevPosition) => (prevPosition === 0 ? customer_data.length - 1 : prevPosition - 1));
  };

  const rightPosition = () => {
    setPosition((prevPosition) => (prevPosition === customer_data.length - 1 ? 0 : prevPosition + 1));
  };

  return (
    <div>
      <p
        style={{
          textAlign: "center",
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: "100px",
        }}
      >
        Customer Review
      </p>
      <div id="controle_review">
        <img src={left_icon} alt="left icon" id="left_icon_controle" onClick={leftPosition}/>
        <img src={right_icon} alt="right icon" id="right_icon_controle" onClick={rightPosition}/>
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Customer_review_card
            rating={customer_data[position].customer_rating}
            profile={customer_data[position].customer_profile}
            title={customer_data[position].customer_name}
            description={customer_data[position].customer_desc}
          />
      </div>
    </div>
  );
}

export default Customer_review;
