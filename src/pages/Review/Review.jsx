import { useState } from "react";
import decks from "../Mydecks/data/flashcard";
import { DueSection } from "./due-section";
import { ReviewBanner } from "./review-banner";
import "./Review.css";
import { WebDev } from "./web-dev";

// const [myDecks, setMyDecks] = useState(decks);

const Review = () => {
  const [review, setReview] = useState(false);

  const statCard = [
    {
      num: 16,
      desc: "Due now",
    },

    {
      num: 0,
      desc: "Later today",
    },

    {
      num: 0,
      desc: "Tomorrow",
    },

    {
      num: 0,
      desc: "Next 7 days",
    },
  ];

  return (
    <>
      {!review && (
        <div className="review_page">
          <div className="Num1">
            <div className="Num2">
              <p>SPACED REPETITION</p>
              <h1>Review</h1>
            </div>

            <div className="stat_div">
              {statCard.map((item, i) => (
                <div key={i} className="stat">
                  <p className="s_n">{item.num}</p>
                  <p className="s_d">{item.desc}</p>
                </div>
              ))}
            </div>

            <ReviewBanner />

            <DueSection review={review} setReview={setReview} />
          </div>
        </div>
      )}

      {review && <WebDev />}
    </>
  );
};

export default Review;
