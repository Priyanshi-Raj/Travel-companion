import React from "react";
import { useState } from "react";
import "./Footer.css";

// import logo1 from "../assets/images/Vector.png";

function Footer() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, message } = userData;
    if (name && email && message) {
      const res = await fetch(
        "https://sihfarmeasy-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );
      if (res) {
        setUserData({
          name: "",
          email: "",
          message: "",
        });
        alert("Your Query reached to us .We will reach you shortyly");
      } else {
        alert("Please fill your query");
      }
    } else {
      alert("Please fill your query");
    }
  };

  return (
    <div className="Footer">
      <div className="ll">
        {/* <img src={logo1} alt="logo" /> */}
        <p className="adress">
          Address : <br />
          JSS Academy of Technical Eduction Gautam Buddh Nagar <br />
          Noida
        </p>
      </div>
      <div className="mid">
        <div className="portals">
          <ul>
            <li className="h">Portals</li>

            <li className="top">Beautiful Locations</li>
            <li>Get Recommendations</li>
            <li>Our Services</li>
            <li>Track-On</li>
            <li>Emergency helpline</li>
            <li>Post Services</li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li className="h">Links</li>

            <li className="top">About Us</li>
            <li>Initiatives</li>
            <li>Roadmap</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>

      {/* <div className="form">
        <p className="para">Got a query? Contact Us</p>
        <form method="POST" className="contact-form">
          <div className="first">
            <div>
              <input
                type="text"
                className="name"
                name="name"
                value={userData.name}
                onChange={postUserData}
                placeholder="Full name"
                required
              />
            </div>
            <div className="mail">
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={postUserData}
                className="email"
                placeholder="E-mail"
                required
              />
            </div>
          </div>
          <textarea
            className="message"
            placeholder=" Message"
            name="message"
            value={userData.message}
            onChange={postUserData}
            cols="45"
            rows="5"
            required
          />

          <button type="submit" onClick={submitData} className="custom-btn btn">
            <span>Submit</span>
          </button>
        </form>
      </div> */}
    </div>
  );
}

export default Footer;
