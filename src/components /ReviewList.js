import React from 'react';
import Review from './Review'; // Importing the Review component from the './Review' file

// Define a functional component ReviewList which takes two props: reviews (an array of review objects) and onDelete.
const ReviewList = ({ reviews, onDelete }) => {
  return (
    
    // Render a container div with a class name 'review-list'
    <div className="review-list">

      {/* Map over the reviews array and render a Review component for each review */}
      {reviews.map(review => (
        <Review key={review.id} review={review} onDelete={onDelete} /> // Pass key, review object, and onDelete function. 
      ))}
    </div>
  );
};

export default ReviewList; // Export the ReviewList component








