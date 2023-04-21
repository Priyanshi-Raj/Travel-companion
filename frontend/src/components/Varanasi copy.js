import React from "react";
import Vimage from "./assets/images/varanasi.jpg";
import "./Varanasi.css"
import Carousel from "./Carousel";
import Feedback from "./Feedback.js";
import CusFeedback from "./CusFeedback.js";
import TransportPoints from "./TransportPoints";

function Varanasi() {
  return (
    <div className="container">
      <div className="box">
        <img className="image" src={Vimage} alt="varanasi"></img>
        <h1>Varanasi</h1>
      </div>
     <div className="cards">
          <h3>Local Services</h3>
          <Carousel/>
     </div>
     <div className="feed">
        <CusFeedback/>
        <Feedback/>
     </div>
     <TransportPoints/>
    </div>
  );
}

export default Varanasi;
