import { ArrowLeft, Rotate3d } from "lucide-react";
import Flashcard from "../../components/reusable/flashcard/Flashcard";
import { useNavigate } from "react-router-dom";

export const WebDev = ({deck}) => {
  const navigate = useNavigate();
 
  return (
    <div className="space-y-[20px]">
      <div className="space-y-[2px]">
        <p className="font-[700] text-[11px] text-[#8d8d99]">STUDY</p>
        <p className="font-[700] text-[30px] text-[#20202a]">Study session</p>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-[2px]">
            <ArrowLeft width={10} color="#7455E8" />{" "}
            <span className="font-[700] text-[12px] text-[#7455e8]">
              End session
            </span>
          </span>
          <span className="font-[400] text-[13px] text-[#777]">
            {deck.title}
          </span>
          <span className="font-[700] text-[13px] text-[#777]">  1/{deck.cards.length}</span>
        </div>
        <div className="w-full h-[5px] bg-gray-300"></div>
      </div>

          <div className="reviewFlashcard">
  <Flashcard
    question={deck.cards[0].question}
    answer={deck.cards[0].answer}
  />

  <div className="mt-[20px] mx-auto flex items-center justify-center gap-[5px]">
    <Rotate3d width={10} color="#aaa" />
    <span className="font-[400] text-[10px] text-[#aaa]">
      Tap to flip
    </span>
  </div>
</div>

      <div className="grid grid-cols-3 items-center gap-[5px]">
        <button className="font-[400] text-[10px] text-[#6959a0] border border-gray-300">
          New card - Your rating schedules the next review
        </button>
      
        <button
  onClick={() => {
    navigate("/Mydecks", {
      state: {
        deckId: deck.id,
        startQuiz: true,
      },
    });
  }}
>
  Prefer a quiz? Take the quiz
</button>
      </div>
    </div>
  );
};
