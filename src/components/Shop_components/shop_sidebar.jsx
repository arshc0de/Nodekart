import React, { useState } from "react";
import "./shop_sidebar.css";
import up_arrow from "../../images/icons/up.svg";
import down_arrow from "../../images/icons/down.svg";

function Shop_sidebar() {
  const [list_status,setlist_status] =useState(false);

  const [open_list, setopen_list] = useState({ display: "none" });
  const open_list_head = () => {
    setlist_status(!list_status);
    if(list_status==true){
      setopen_list({ display: "block" });
    }else{
      setopen_list({ display: "none" });
    }
  };
  return (
    <div id="sidebar_shop">
      <ul>
        <div className="container_icons">
          <p className="head_sidebar">Category</p>
          <img
            src={(list_status)?down_arrow:up_arrow}
            alt="openlist"
            className="user_nav_icons"
            onClick={open_list_head}
          />
        </div>
      </ul>
      <a href="#" className="subHead_sidebar" style={open_list}>Fashion</a>
      <a href="#" className="underHead_sidebar"style={open_list} >Modern</a>
      <a href="#" className="underHead_sidebar"style={open_list} >Popular</a>
      <a href="#" className="underHead_sidebar"style={open_list} >Trending</a>
      <a href="#" className="underHead_sidebar"style={open_list} >Newest</a>
      <div className="container_icons">
        <p className="head_sidebar">Filter by:</p>
        <img
          src={down_arrow}
          alt="openlist"
          className="user_nav_icons"
          onClick={open_list_head}
        />
      </div>

      <p className="subHead_sidebar">Price</p>
      <input type="range" name="" id="" />
      <div className="container_icons">
        <p className="head_sidebar">style</p>
        <img
          src={down_arrow}
          alt="openlist"
          className="user_nav_icons"
          onClick={open_list_head}
        />
      </div>
    </div>
  );
}

export default Shop_sidebar;
