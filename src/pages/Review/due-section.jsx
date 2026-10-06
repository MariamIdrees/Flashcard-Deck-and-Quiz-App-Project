import { getDueCards } from "./review-data";

export const DueSection = ({ setReview, setSelectedReviewDeck, decks }) => {
  const colors = {
    pink: "  bg-[#93C5FD] ",
    html: "bg-[#86EFAC] ",
    french: "bg-[#FDE68A]  ",
    hausa: "bg-[#F9D0E2]",
  };

  const due = decks.map((deck) => ({
    ...deck,
    dueCards: getDueCards(deck),
  }));

  return (
    <div className="grid grid-cols-2 gap-[24px] mt-[24px] max-lg:grid-cols-1">
      <div className="space-y-[20px] bg-white p-[20px] rounded-[10px]">
        <div className="">
          <p className="font-[700] text-[20px] text-[#20202a]">Due by deck</p>
          <p className="font-[400] text-[11px] text-[#92929b]">
            Review one deck at a time
          </p>
        </div>

        <div className="space-y-[10px]">
          {due.map((item) => (
            <div
              key={item.id}
              className="p-[10px] rounded-[10px]  border border-gray-200 rounded-[1px] flex justify-between items-center gap-[10px] flex-wrap"
            >
              <div
                className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center   ${item.title === "Web Development" ? colors.pink : item.title === "Food" ? colors.html : item.title === "Travels" ? colors.french : colors.hausa}  `}
              >
                <span className="text-white">+</span>
              </div>
              <div className=" flex-1">
                <p className="font-[700] text-[13px] text-[#20202a]">
                  {item.title}
                </p>
                <div
                  className={`w-[5px] h-[5px] w-full   ${item.title === "Web Development" ? colors.pink : item.title === "Food" ? colors.html : item.title === "Travels" ? colors.french : colors.hausa}  `}
                ></div>
                <p className="font-[400] text-[11px] text-[#8a94a2]">
                  {item.dueCards.length} of {item.cards.length} cards due
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedReviewDeck(item);
                  setReview(true);
                }}
                disabled={!item.dueCards.length}
                className="font-[700] text-[12px] text-[#5f4bb0] border border-[#7C5CFF] p-[10px] rounded-[10px]"
              >
                Review
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-[20px] bg-white p-[20px] rounded-[10px]">
        <div className="">
          <p className="font-[700] text-[20px] text-[#20202a]">Due by deck</p>
          <p className="font-[400] text-[11px] text-[#92929b]">
            Review one deck at a time
          </p>
        </div>

        <div className="w-full flex justify-center items-center rounded-[20px] border border-gray-300 border-dashed min-h-[100px]">
          <p className="font-[400] text-[12px] text-[#92929b]">
            Nothing scheduled yet.
          </p>
        </div>
      </div>
    </div>
  );
};
