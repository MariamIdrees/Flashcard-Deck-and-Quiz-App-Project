import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Flashcard from "../../components/reusable/flashcard/Flashcard";
import "./ReviewSession.css";

const SCHEDULE_KEY = "reviewSchedule";
const ratings = [
  { label: "Again", interval: 10 * 60 * 1000, intervalLabel: "10 min" },
  { label: "Hard", interval: 24 * 60 * 60 * 1000, intervalLabel: "1 day" },
  { label: "Good", interval: 3 * 24 * 60 * 60 * 1000, intervalLabel: "3 days" },
  { label: "Easy", interval: 7 * 24 * 60 * 60 * 1000, intervalLabel: "7 days" },
];

const getReviewSchedule = () => {
  try {
    return JSON.parse(localStorage.getItem(SCHEDULE_KEY) || "{}");
  } catch {
    return {};
  }
};

const saveCardRating = (deckId, cardId, rating) => {
  const now = Date.now();
  const schedule = getReviewSchedule();

  schedule[`${deckId}:${cardId}`] = {
    rating: rating.label,
    dueAt: now + rating.interval,
    updatedAt: now,
  };

  try {
    localStorage.setItem(SCHEDULE_KEY, JSON.stringify(schedule));
    return true;
  } catch {
    return false;
  }
};

export const ReviewSession = ({ deck, onEnd }) => {
  const [dueCards] = useState(() => {
    const schedule = getReviewSchedule();
    const now = Date.now();

    return deck.cards.filter((card) => {
      const dueAt = schedule[`${deck.id}:${card.id}`]?.dueAt;
      return !dueAt || dueAt <= now;
    });
  });
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [notice, setNotice] = useState("");
  const card = dueCards[cardIndex];

  const moveToCard = (nextIndex) => {
    setCardIndex(nextIndex);
    setIsFlipped(false);
    setNotice("");
  };

  const rateCard = (rating) => {
    const saved = saveCardRating(deck.id, card.id, rating);
    setNotice(
      saved
        ? `${rating.label}: scheduled again in ${rating.intervalLabel}.`
        : "Could not save this review schedule in this browser.",
    );
    setCardIndex((index) => index + 1);
    setIsFlipped(false);
  };

  return (
    <section
      className="study-session"
      aria-label={`${deck.title} study session`}
    >
      <header className="study-heading">
        <p>STUDY</p>
        <h1>{deck.title}</h1>
      </header>

      <div className="study-content">
        <div className="study-progress">
          <button className="end-session" type="button" onClick={onEnd}>
            <ArrowLeft size={15} aria-hidden="true" />
            End session
          </button>
          <span className="study-deck-name">{deck.title}</span>
          <span className="study-count">
            {Math.min(cardIndex + 1, dueCards.length)}{" "}
            <span>/ {dueCards.length}</span>
          </span>
          <div
            className="study-progress-track"
            role="progressbar"
            aria-label="Deck review progress"
            aria-valuemin={0}
            aria-valuemax={dueCards.length}
            aria-valuenow={Math.min(cardIndex + 1, dueCards.length)}
          >
            <span
              style={{
                width: dueCards.length
                  ? `${(Math.min(cardIndex + 1, dueCards.length) / dueCards.length) * 100}%`
                  : "100%",
              }}
            />
          </div>
        </div>

        {notice && (
          <p className="study-notice" role="status">
            {notice}
          </p>
        )}

        {card ? (
          <>
            <div className="study-flashcard-wrap">
              <Flashcard
                key={card.id}
                question={card.question}
                answer={card.answer}
                isFlipped={isFlipped}
                onFlip={setIsFlipped}
              />
            </div>

            {isFlipped ? (
              <div className="study-rating" aria-label="Rate card difficulty">
                {ratings.map((rating) => (
                  <button
                    key={rating.label}
                    className={`rating-button rating-${rating.label.toLowerCase()}`}
                    type="button"
                    onClick={() => rateCard(rating)}
                  >
                    <span>{rating.label}</span>
                    <small>{rating.intervalLabel}</small>
                  </button>
                ))}
              </div>
            ) : (
              <div className="study-controls">
                <button
                  className="study-step-button"
                  type="button"
                  onClick={() =>
                    moveToCard(
                      (cardIndex - 1 + dueCards.length) % dueCards.length,
                    )
                  }
                  aria-label="Previous card"
                >
                  <ArrowLeft size={17} aria-hidden="true" />
                  Previous
                </button>
                <button
                  className="study-answer-button"
                  type="button"
                  onClick={() => setIsFlipped(true)}
                >
                  Show answer
                </button>
                <button
                  className="study-step-button"
                  type="button"
                  onClick={() => moveToCard((cardIndex + 1) % dueCards.length)}
                  aria-label="Next card"
                >
                  Next
                  <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="study-complete">
            <span className="study-card-label">
              {dueCards.length ? "ROUND COMPLETE" : "ALL CAUGHT UP"}
            </span>
            <h2>
              {dueCards.length
                ? "You reviewed every due card."
                : "No cards are due right now."}
            </h2>
            <p>
              {dueCards.length
                ? "Your ratings have scheduled the next review for each card."
                : "New cards will appear here, along with cards when their scheduled review time arrives."}
            </p>
            <button
              className="study-answer-button"
              type="button"
              onClick={onEnd}
            >
              Back to reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
