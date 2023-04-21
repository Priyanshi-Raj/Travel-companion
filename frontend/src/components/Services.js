import React from 'react';
import './Services.css';

const cardData = [
  {
    imageSrc: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/09/Chennai-1.jpg',
    title: 'Multi-Language Selector',
    description: 'At NativeVibes, we understand the importance of clear and effective communication.That is why we offer a multi-language selector that allows our users to select their preferred language from a range of options. Whether you are a native English speaker or prefer to use Spanish, French, German, or any other language'
  }
 ,
  {
    imageSrc: 'https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg',
    title: 'Authentic Experience',
    description: 'NativeVibes offers a feature that provides travelers with ratings and feedback from locals, helping them make informed decisions about where to visit and what to do. This ensures that travelers have an authentic and immersive travel experience by connecting them with local communities.'
  },
  {
    imageSrc: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2017/07/18.jpg',
    title: 'Recommendation System',
    description: 'NativeVibes offers a personalized travel experience to users through a recommendation system that considers their preferred activities, such as hiking, sightseeing, food and wine tours, and adventure sports. The system suggests popular destinations for these activities, ensuring that users have an enjoyable and tailored travel experience.'
  },
  {
    imageSrc: 'https://blog.goldenchariot.org/wp-content/uploads/2020/06/south-india-tourism.png',
    title: 'Budget Planner',
    description: 'NativeVibes offers a budget planner feature that helps travelers plan their trips based on their budget and the number of days they plan to stay. This ensures that users can have a stress-free and enjoyable travel experience by staying within their budget. The feature is integrated into the website to provide users with a personalized travel experience.'
  },
  {
    imageSrc: 'https://housing.com/news/wp-content/uploads/2022/11/Famous-tourist-places-in-India-state-compressed.jpg',
    title: 'ChatBot',
    description: 'NativeVibes offers a chatbot feature that provides personalized travel recommendations to users. The feature is integrated into the website and allows users to ask for suggestions on where to go and what to discover. The chatbot takes into account the users interests and preferences, making trip planning less overwhelming and more enjoyable.'
  },
  {
    imageSrc: 'https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2014/02/delhi.jpg',
    title: 'Community Driven',
    description: 'The platform allows its users to upload photos and create blog posts, providing them with the opportunity to share their experiences and opinions with others. This feedback can be beneficial to other users who are seeking information or guidance on a particular topic or product.'
  }
];

const Services = () => {
  return (

    <div className="card-container">
 
      {cardData.map((data, index) => (
        <div key={index} className="card">
          <img src={data.imageSrc} alt={data.title} className="card-image" />
          <h2 className="card-title">{data.title}</h2>
          <p className="card-description">{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;


