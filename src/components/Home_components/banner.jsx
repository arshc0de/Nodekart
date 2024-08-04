import React from "react";
import NumCount from "./num";
import FashionModel from "./model";
import Brand_band from "./brand_band";
import './banner.css'
function Banner() {
    const numCo = [{
        countPro: "200+",
        title: "International Brand"
    },
    {
        countPro: "2,000+",
        title: "High Quality Product"
    },
    {
        countPro: "30,000+",
        title: "Happy Customer"
    }
    ]
    return (
        <div id="main">
            <div id="banner_main">
                <div id="info_side">
                    <p id="banner_head">Find Clothes<br />That Matches<br />Your Style</p>
                    <p id="banner_body">Browse through our diverse range of meticulously crafted garments, designed<br />to bring out individuality and cater to your sense of style</p>
                    <br />
                    <a href="#" id="btn_shop_now">Shop Now</a>
                    <br />
                    <div id="numCo_main">
                        {numCo.map((ele) => (
                            <NumCount countPro={ele.countPro} title={ele.title} />
                        ))}
                    </div>
                </div>
                <div id="gallery_side">
                    <FashionModel/>
                </div>
            </div>
            <div id="brand">
            <Brand_band/>
            </div>
        </div>
    );
}

export default Banner;
