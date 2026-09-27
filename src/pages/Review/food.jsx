import decks from "../Mydecks/data/flashcard";
import { ReviewSession } from "./ReviewSession";

const deck = decks.find((item) => item.title === "Food");

export const Food = ({ onEnd }) => <ReviewSession deck={deck} onEnd={onEnd} />;
