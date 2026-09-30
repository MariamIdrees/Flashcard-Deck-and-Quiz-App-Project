import "./Review.css";
import { useState } from "react";
import decks from "../Mydecks/data/flashcard";
import { DueSection } from "./due-section";
import { ReviewBanner } from "./review-banner";
import { ReviewSession } from "./ReviewSession";
import { getReviewSummary } from "./review-data";

const Review = () => {
  const [review, setReview] = useState(false);
  const [selectedReviewDeck, setSelectedReviewDeck] = useState(null);
  const reviewSummary = getReviewSummary(decks);

  const startReview = (deck) => {
    if (!deck) return;
    setSelectedReviewDeck(deck);
    setReview(true);
  };

  return (
    <div className="reviewPage">
      {!review ? (
        <>
          <ReviewBanner decks={decks} onStartReview={startReview} />

          {/* <div className="reviewStats">
            <div>
              <h2>{reviewSummary.dueCardCount}</h2>
              <p>Cards due</p>
            </div>

            <div>
              <h2>0</h2>
              <p>Reviewed today</p>
            </div>

            <div>
              <h2>0</h2>
              <p>Mastered</p>
            </div>

            <div>
              <h2>0</h2>
              <p>Learning</p>
            </div>
          </div> */}

          <DueSection
            setReview={setReview}
            setSelectedReviewDeck={setSelectedReviewDeck}
            decks={decks}
          />
        </>
      ) : selectedReviewDeck ? (
        <ReviewSession
          deck={selectedReviewDeck}
          onEnd={() => setReview(false)}
        />
      ) : (
        <ReviewBanner decks={decks} onStartReview={startReview} />
      )}
    </div>
  );
};

export default Review;
