import React from "react";
import "./Section1.css";
import SearchBar from "./search-bar";

const Section1 = () => {
  return (
    <div className="container">
      <div className="left-div">
        <h2>Grow Faster, Go Global</h2>
        <p>Strengthen your Supply Chain, and Scale your Business <br />with Reliable Shipping and Cashflows.</p>
        <h3>Talk to us now!</h3>
        <SearchBar className="search-bar"/>
      </div>
      <div className="right-div">
      <video src="https://cdn.cogoport.io/cms-prod/cogo_public/vault/original/cogoverse_mobile_3.webm" autoPlay loop muted />
      </div>
    </div>
  );
};

export default Section1;
