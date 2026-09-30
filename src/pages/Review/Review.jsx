// import { useState, useEffect } from "react";
// import decks from "../Mydecks/data/flashcard";
// import { DueSection } from "./due-section";
// import { ReviewBanner } from "./review-banner";
// import "./Review.css";
// import { WebDev } from "./web-dev";

// const Review = () => {
//   const [review, setReview] = useState(false);
//   const [selectedReviewDeck, setSelectedReviewDeck] = useState(null);

//   useEffect(() => {
//     setSelectedReviewDeck(decks[0]);
//   }, []);

//   const statCard = [
//     {
//       num: 16,
//       desc: "Due now",
//     },
//     {
//       num: 0,
//       desc: "Later today",
//     },
//     {
//       num: 0,
//       desc: "Tomorrow",
//     },
//     {
//       num: 0,
//       desc: "Next 7 days",
//     },
//   ];

//   return (
//     <>
//       {review === "0" && (
//         <div className="review_page">
//           <div className="Num1">
//             <div className="Num2">
//               <p>SPACED REPETITION</p>
//               <h1>Review</h1>
//             </div>

//             <div className="stat_div">
//               {statCard.map((item, i) => (
//                 <div key={i} className="stat">
//                   <p className="s_n">{item.num}</p>
//                   <p className="s_d">{item.desc}</p>
//                 </div>
//               ))}
//             </div>

//             <ReviewBanner />

//             <DueSection
//               review={review}
//               setReview={setReview}
//               setSelectedReviewDeck={setSelectedReviewDeck}
//               decks={decks}
//             />
//           </div>
//         </div>
//       )}

//       {review && selectedReviewDeck && (
//         <WebDev deck={selectedReviewDeck} />
//       )}
//     </>
//   );
// };

// export default Review;






import "./Review.css";
import { useState } from "react";
import decks from "../Mydecks/data/flashcard";
import { DueSection } from "./due-section";
import { ReviewBanner } from "./review-banner";
import { ReviewSession } from "./ReviewSession";

const Review = () => {
  const [review, setReview] = useState(false);
  const [selectedReviewDeck, setSelectedReviewDeck] = useState(null);

  return (
    <div className="reviewPage">
      {!review ? (
        <>
          <ReviewBanner />

          <div className="reviewStats">
            <div>
              <h2>16</h2>
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
          </div>

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
        <ReviewBanner />
      )}
    </div>
  );
};

export default Review;