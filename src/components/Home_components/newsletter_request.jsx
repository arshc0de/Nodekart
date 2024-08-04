import React from "react";
import "./newsletter_request.css";
function Newsletter_request() {
  return (
    <div id="main_news">
      <div id="newsletter">
        <p id="newsletter_head">
          READY TO GET LATEST OFFER INFORMATION FIRST ?
        </p>
        <div id="newsletter_user_handel">
          <input
            type="email"
            name=""
            id="user_email"
            placeholder="Enter email"
          />
          <br />
          <input
            type="submit"
            value="Subscribe to Newsletter"
            id="user_btn_news"
          />
        </div>
      </div>
    </div>
  );
}

export default Newsletter_request;
