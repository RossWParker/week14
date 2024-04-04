import React, { useState } from 'react';
import Stars from './Stars'; 

// Define a functional component ReviewForm which takes a prop onAddReview (a function to add a new review)
const ReviewForm = ({ onAddReview }) => {

  // Define state variables for name, rating, and comment using useState hook
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  // Define a function handleSubmit to handle form submission
  const handleSubmit = e => {
    e.preventDefault(); 

    // Create a new review object with a unique id, name, rating, and comment
    const newReview = {
      id: Date.now(),
      name,
      rating, 
      comment
    };

    // Call the onAddReview function and pass the new review
    onAddReview(newReview);

    // Reset form fields after submission
    setName('');
    setRating(1);
    setComment('');
  };

  // Render the ReviewForm component
  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h4>Leave a Review</h4>
      <Stars rating={rating} onChange={setRating} /> {/* Render the Stars component with rating and onChange props */}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)} // Handle name input change
        required
      />
      <br />
      <textarea
        placeholder="Your Review"
        value={comment}
        onChange={e => setComment(e.target.value)} // Handle comment input change
        required
      ></textarea>
      <br />
      <button type="submit">Submit</button> {/* Render a submit button */}
    </form>
  );
};

export default ReviewForm; 


