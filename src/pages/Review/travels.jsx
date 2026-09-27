import decks from "../Mydecks/data/flashcard";
import { ReviewSession } from "./ReviewSession";

const deck = decks.find((item) => item.title === "Travels");

export const Travels = ({ onEnd }) => (
  <ReviewSession deck={deck} onEnd={onEnd} />
);
