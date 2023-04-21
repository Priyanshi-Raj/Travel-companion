// import {useState} from 'react'
import Slider from "react-slick";
import house2 from "./assets/images/house2.webp"
import "./Carousel.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const locals = [
  {
    name: "Rajesh Sharma",
    contact: {
      phone: "9876543210",
      email: "rajesh.sharma@example.com",
      address: "123 Jaipur Road, Jaipur",
    },
    location: "Jaipur",
    description:
      "We offer a cozy homestay experience in the heart of Jaipur's old city. Our traditional Rajasthani-style home is perfect for couples and solo travelers looking for an authentic stay in Jaipur.",
    stay: {
      type: "Homestay",
      rooms: 2,
      guests: 4,
      "check-in": "2:00 PM",
      "check-out": "12:00 PM",
      amenities: ["WiFi", "Kitchen", "Parking"],
      pictures: [
        "https://example.com/pictures/room1.jpg",
      ],
    },
    feedback: {
      rating: 4.5,
      facilities: 4.0,
      food: 5.0,
      cleanliness: 4.5,
      comments:
        "The homestay was very comfortable and had everything we needed. Rajesh and his family were incredibly hospitable and made us feel at home. The food was delicious and we loved the rooftop terrace with views of the city.",
    },
  },
  {
    name: "Sangeeta Verma",
    contact: {
      phone: "9876543210",
      email: "sangeeta.verma@example.com",
      address: "456 Manali Road, Manali",
    },
    location: "Manali",
    description:
      "Welcome to our cozy guesthouse in the heart of Manali. We offer comfortable rooms with stunning views of the surrounding mountains. Perfect for couples and families looking for a peaceful getaway in the mountains.",
    stay: {
      type: "Guesthouse",
      rooms: 3,
      guests: 6,
      "check-in": "2:00 PM",
      "check-out": "12:00 PM",
      amenities: ["WiFi", "Parking"],
      pictures: [
        "https://example.com/pictures/room1.jpg",
        "https://example.com/pictures/room2.jpg",
      ],
    },
    feedback: {
      rating: 4.0,
      facilities: 3.5,
      food: 4.5,
      cleanliness: 4.0,
      comments:
        "The guesthouse was lovely and had great views of the mountains. Sangeeta and her family were very welcoming and made us feel at home. The food was delicious and we appreciated the home-cooked meals. The only downside was that the bathroom was a bit small.",
    },
  },
  {
    name: "Mukesh Patel",
    contact: {
      phone: "9876543210",
      email: "mukesh.patil@example.com",
      address: "123 Baga Beach Road, Goa",
    },
    location: "Goa",
    description:
      "Experience the best of Goa at our guesthouse, located just steps from Baga Beach. We offer comfortable rooms and a peaceful retreat from the hustle and bustle of the city.",
    stay: {
      type: "Guesthouse",
      rooms: 4,
      guests: 8,
      "check-in": "2:00 PM",
      "check-out": "12:00 PM",
      amenities: ["WiFi", "Parking"],
      pictures: [
        "https://example.com/pictures/room1.jpg",
        "https://example.com/pictures/room2.jpg",
      ],
    },
    feedback: {
      rating: 4.5,
      facilities: 4.0,
      food: 4.5,
      cleanliness: 4.5,
      comments:
        "We had a wonderful stay at Mukesh's guesthouse. The location was perfect, just a short walk from the beach. The room was comfortable and clean, and the food was delicious. Mukesh and his family were very friendly and accommodating. Highly recommend!",
    },
  },
  {
    name: "Neha Sharma",
    contact: {
      phone: "9876543210",
      email: "neha.sharma@example.com",
      address: "456 Mall Road, Shimla",
    },
    location: "Shimla",
    description:
      "Escape to the hills at our cozy homestay in Shimla. We offer comfortable rooms with stunning views of the surrounding mountains, and a peaceful retreat from the city.",
    stay: {
      type: "Homestay",
      rooms: 2,
      guests: 4,
      "check-in": "2:00 PM",
      "check-out": "12:00 PM",
      amenities: ["WiFi", "Kitchen", "Parking"],
      pictures: [
        "https://example.com/pictures/room1.jpg",
        "https://example.com/pictures/room2.jpg",
      ],
    },
    feedback: {
      rating: 4.0,
      facilities: 3.5,
      food: 4.5,
      cleanliness: 4.0,
      comments:
        "We enjoyed our stay at Neha's homestay. The location was beautiful and peaceful, and the room was cozy and comfortable. The food was delicious and we appreciated the home-cooked meals. The only downside was that the bathroom was a bit small.",
    },
  },
  {
    name: "Rajeev Kapoor",
    contact: {
      phone: "9876543210",
      email: "rajeev.kapoor@example.com",
      address: "789 MG Road, Pune",
    },
    location: "Pune",
    description:
      "Stay in the heart of Pune at our modern apartment. We offer stylish and comfortable rooms with all the amenities you need for a comfortable stay.",
    stay: {
      type: "Apartment",
      rooms: 1,
      guests: 2,
      "check-in": "2:00 PM",
      "check-out": "12:00 PM",
      amenities: ["WiFi", "Kitchen", "Parking"],
      pictures: [
        "https://example.com/pictures/room1.jpg",
        "https://example.com/pictures/room2.jpg",
      ],
    },
    feedback: {
      rating: 4.0,
      facilities: 3.5,
      food: 4.5,
      cleanliness: 4.0,
      comments:
        "We enjoyed our stay at Neha's homestay. The location was beautiful and peaceful, and the room was cozy and comfortable. The food was delicious and we appreciated the home-cooked meals. The only downside was that the bathroom was a bit small.",
    },
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Card = ({ name, location, stay, feedback }) => {
  return (
    <div className="carda">
      <div className="img-cont"> 
       <img src={house2} alt={name} className="carda-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {/* <h6 className="card-subtitle m-0 text-muted">{location}</h6> */}
        <p className="card-text ">{stay.description}</p>
        <p className="">{feedback.comments}</p>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">{stay.type}</li>
          <li className="list-group-item">{stay.rooms} Rooms</li>
          <li className="list-group-item">{stay.guests} Guests</li>
          <li className="list-group-item">Check-in: {stay["check-in"]}</li>
          <li className="list-group-item">Check-out: {stay["check-out"]}</li>
          <li className="list-group-item">
            Amenities: {stay.amenities.join(", ")}
          </li>
        </ul> */}
        <div className="card-footer">
          <span className="badge bg-primary">{feedback.rating}</span>
          <span className="mx-2">Facilities: {feedback.facilities}</span>
          <span className="mx-2">Food: {feedback.food}</span>
          <span className="mx-2">Cleanliness: {feedback.cleanliness}</span>
        </div>
      </div>
    </div>
  );
};
export default function Carousel() {
  return (
    <div className="parent">
      <Slider {...settings}>
        {locals.map((item) => (
          <Card
            name={item.name}
            location={item.location}
            stay={item.stay}
            feedback={item.feedback}
          />
        ))}
      </Slider>
    </div>
  );
}
