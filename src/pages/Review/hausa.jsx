import decks from "../Mydecks/data/flashcard";
import { ReviewSession } from "./ReviewSession";

const deck = decks.find((item) => item.title === "Hausa Language");

export const Hausa = ({ onEnd }) => <ReviewSession deck={deck} onEnd={onEnd} />;
