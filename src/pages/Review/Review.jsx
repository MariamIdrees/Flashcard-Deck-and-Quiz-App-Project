import { useState, useEffect } from "react";
import decks from "../Mydecks/data/flashcard";
import { DueSection } from "./due-section";
import { ReviewBanner } from "./review-banner";
import "./Review.css";
import { WebDev } from "./web-dev";

const Review = () => {
  const [review, setReview] = useState(false);
  const [selectedReviewDeck, setSelectedReviewDeck] = useState(null);

  useEffect(() => {
    setSelectedReviewDeck(decks[0]);
  }, []);

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
      {review === "0" && (
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

            <DueSection
              review={review}
              setReview={setReview}
              setSelectedReviewDeck={setSelectedReviewDeck}
              decks={decks}
            />
          </div>
        </div>
      )}

      {review && selectedReviewDeck && (
        <WebDev deck={selectedReviewDeck} />
      )}
    </>
  );
};

export default Review;