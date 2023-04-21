import React, { useState } from "react";
import Rating from "react-rating-stars-component";
import "./Feedback.css";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle submitting feedback and rating
    console.log(feedback, rating);
    setFeedback("");
    setRating(0);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="feedback-input">Please provide your feedback:</label>
        <textarea
          id="feedback-input"
          value={feedback}
          onChange={handleFeedbackChange}
          placeholder="Type your feedback here..."
          required
        />
        <label htmlFor="rating-input">Please rate your experience:</label>
        <Rating
          id="rating-input"
          count={5}
          value={rating}
          onChange={handleRatingChange}
          size={24}
          activeColor="#ffd700"
        />
        <button type="submit">Submit</button>
      </form>
  );
};

export default FeedbackForm;
