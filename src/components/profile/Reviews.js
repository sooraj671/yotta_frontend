import React from 'react';
import './Reviews.css'; // Add your CSS for styling

// Dummy data
const reviews = [
  {
    rating: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur tristique, scelerisque a risus.",
    reviewer: "FELICIA SOH",
    relation: "PARENT OF JAYDEN, 12 Y/O",
    feedback: "EXCELLENT"
  },
  {
    rating: 4,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lectus massa, tincidunt at consectetur tristique, scelerisque a risus.",
    reviewer: "LIM BOON KHOR",
    relation: "PARENT OF DERRICK, 15 Y/O",
    feedback: "VERY GOOD"
  }
];

// Function to render stars based on rating
const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i}>
        {i < rating ? '★' : '☆'}
      </span>
    );
  }
  return stars;
};

// Reviews component
const Reviews = () => {
  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div className="review-card" key={index}>
          <div className="stars">{renderStars(review.rating)}</div>
          <h4>{review.feedback}</h4>
          <p>{review.comment}</p>
          <div className="reviewer-info">
            <strong>{review.reviewer}</strong>
            <br />
            {review.relation}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
