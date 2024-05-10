import React from "react";
import "./Reviews.css";
import image1 from "../assets/john.jpg";

const reviews = [
  {
    id: 1,
    title: "Great Experience",
    userName: "John",
    comments: "Love your services",
    imageUrl: image1,
  },
  {
    id: 2,
    title: "Awesome Product",
    userName: "James",
    comments: "Wonderful experience with your company",
    imageUrl:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/68628_v9_bc.jpg",
  },
  {
    id: 3,
    title: "Wonderful Services",
    userName: "Jessica",
    comments: "Wonderful experience with your company. Always recommonded",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Jessica_Jung_for_Vogue_Taiwan_on_20032021_%281%29.png",
  },
];

function Reviews() {
  return (
    <div id="rev" className="container-fluid">
      <div className="review-list">
        <h2>Customer Reviews</h2>
        <div className="grid-container container1">
          {reviews.map((review) => (
            <div key={review.id} className="review-item">
              <img src={review.imageUrl} alt={`Review by ${review.userName}`} />
              <h3>{review.title}</h3>
              <p>
                <strong>{review.userName}</strong>: {review.comments}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
