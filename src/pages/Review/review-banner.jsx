import { getReviewSummary } from "./review-data";

export const ReviewBanner = ({ decks, onStartReview }) => {
  const summary = getReviewSummary(decks);
  const hasDueCards = summary.dueCardCount > 0;

  return (
    <div className="w-full  p-[20px] mt-[24px] gap-[40px] flex justify-between rounded-[20px] bg-[#008000] overflow-hidden max-lg:flex-col items-center">
      <div className="space-y-[10px]">
        <div>
          <p className="font-[800] text-[10px] text-[#a98dff]">
            {hasDueCards ? "READY TO REVIEW" : "ALL CAUGHT UP"}
          </p>
          <p className="font-[700] text-[25px] text-[#fff]">
            {hasDueCards
              ? `${summary.dueCardCount} ${summary.dueCardCount === 1 ? "card" : "cards"} waiting across ${summary.dueDecks.length} ${summary.dueDecks.length === 1 ? "deck" : "decks"}`
              : "No cards due right now"}
          </p>
        </div>

        <div className="flex items-center gap-[10px] flex-wrap">
          {[
            `${summary.newCardCount} new`,
            `${summary.relearnCardCount} to relearn`,
            `* ${summary.estimatedMinutes} min`,
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-full border bordr-white p-[10px] flex justify-center items-center font-[700] text-[11px] text-[#d8cfff] px-[30px]"
            >
              {item}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onStartReview(summary.dueDecks[0])}
          disabled={!hasDueCards}
          className="bg-[#6545DB] rounded-[6px] font-[700] p-[10px] text-[13px] text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          Start review
        </button>
      </div>

      <div className=" rotate-10 translate-y-5 translate-x-[-25px] max-lg:translate-0 max-lg:rotate-0 bg-white flex justify-center items-center p-[20px] rounded-[20px]">
        <div className="flex flex-col items-center">
          <p className="font-[700] text-[64px] text-[#7555e8]">
            {summary.dueCardCount}
          </p>
          <p className="font-[800] text-[16px] text-[#252238]">cards due now</p>
        </div>
      </div>
    </div>
  );
};
