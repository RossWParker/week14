// import React, { useState } from 'react';
// import ReviewList from './ReviewList'; // Importing the ReviewList component from the './ReviewList' file
// import ReviewForm from './ReviewForm'; // Importing the ReviewForm component from the './ReviewForm' file

// // Define a functional component Movie which takes a prop movie
// const Movie = ({ movie }) => {
//   // Initialize state for reviews using useState hook, defaulting to movie.reviews
//   const [reviews, setReviews] = useState(movie.reviews);

//   // Define a function handleAddReview which takes a newReview and updates the reviews state by adding the new review
//   const handleAddReview = newReview => {
//     setReviews([...reviews, newReview]); // Update the reviews state with the new review
//   };

//   // Define a function handleDeleteReview which takes an id and filters out the review with the given id from the reviews state
//   const handleDeleteReview = id => {
//     setReviews(reviews.filter(review => review.id !== id)); // Filter out the review with the given id
//   };

//   // Render the Movie component
//   return (
//     <div className="movie">
//       <h2>{movie.title}</h2>
//       <img src={movie.image} alt={movie.title} width="300px" />
//       <p>{movie.synopsis}</p>
//       <p style={{ maxWidth: "600px", margin: "0 auto" }}>{movie.synopsis}</p>
      
//       <h2>Starring</h2>
//       <p>{movie.starring}</p>
//       <h3>Rating: {movie.rating}</h3>
//       {/* Render the ReviewList component passing reviews and handleDeleteReview as props */}
//       <ReviewList reviews={reviews} onDelete={handleDeleteReview} />
//       {/* Pass the handleAddReview function to the ReviewForm component */}
//       <ReviewForm onAddReview={handleAddReview} />
//     </div>
//   );
// };

// export default Movie; 

import React, { useState } from 'react';
import ReviewList from './ReviewList'; // Importing the ReviewList component from the './ReviewList' file
import ReviewForm from './ReviewForm'; // Importing the ReviewForm component from the './ReviewForm' file

// Define a functional component Movie which takes a prop movie
const Movie = ({ movie }) => {
  // Initialize state for reviews using useState hook, defaulting to movie.reviews
  const [reviews, setReviews] = useState(movie.reviews);

  // Define a function handleAddReview which takes a newReview and updates the reviews state by adding the new review
  const handleAddReview = newReview => {
    setReviews([...reviews, newReview]); // Update the reviews state with the new review
  };

  // Define a function handleDeleteReview which takes an id and filters out the review with the given id from the reviews state
  const handleDeleteReview = id => {
    setReviews(reviews.filter(review => review.id !== id)); // Filter out the review with the given id
  };

  // Render the Movie component
  return (
    <div className="movie">
      <h3>{movie.title}</h3>
      <img src={movie.image} alt={movie.title} width="300px" />
      <p style={{ maxWidth: "800px", margin: "0 auto" }}>{movie.synopsis}</p>
      
      <h2>Starring</h2>
      <p>{movie.starring}</p>
      <h3>Rating: {movie.rating}</h3>

      {/* Render the ReviewList component passing reviews and handleDeleteReview as props */}
      <ReviewList reviews={reviews} onDelete={handleDeleteReview} />

      {/* Pass the handleAddReview function to the ReviewForm component */}
      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
};

export default Movie;
