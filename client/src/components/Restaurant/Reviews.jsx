<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e

//components
import ReviewCard from "../Reviews/ReviewCard";
import AddReviewCard from "../Reviews/AddReviewCard";
<<<<<<< HEAD

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      rating: 3.5,
      isRestaurantReview: false,
      createdAt: "Fri Oct 14 2022 20:20:34 GMT+0530 (India Standard Time)",
      reviewText: "Very bad experience.",
    },
    {
      rating: 4.5,
      isRestaurantReview: false,
      createdAt: "Fri Oct 14 2022 20:19:34 GMT+0530 (India Standard Time)",
      reviewText: "Very good experience.",
    },
  ]);
=======
import { useParams } from "react-router-dom";

// redux
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../../redux/reducers/review/review.action";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();

  const updatedReviews = useSelector(
    (globalState) => globalState.review.reviews.reviews
  );

  useEffect(() => {
    dispatch(getReview(id)).then((data) => {
      setReviews(data.payload.reviews);
    });
  }, []);

  useEffect(() => {
    if (updatedReviews) {
      setReviews(updatedReviews);
    }
  }, [updatedReviews]);
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e

  return (
    <div className="w-full h-full flex-col md:flex md:flex-row relative gap-5">
      <div className="w-full md:w-8/12 flex flex-col gap-3">
<<<<<<< HEAD
        <div className="md:hidden mb-4">
=======
        <div className="md:hidden mb-4 flex flex-col gap-2">
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e
          <AddReviewCard />
        </div>
        {reviews.map((review, index) => (
          <ReviewCard {...review} key={index} />
        ))}
      </div>
      <aside
        style={{ height: "fit-content" }}
        className="hidden md:flex md:w-4/12 sticky rounded-xl top-20 bg-white py-4 px-4 shadow-md flex-col gap-4"
      >
        <AddReviewCard />
      </aside>
    </div>
  );
};

<<<<<<< HEAD
export default Reviews;
=======
export default Reviews;
>>>>>>> 7460fece9fba6aeb9c662dc8843d90d77211f46e
