const due = [
  {
    course: "Web Development",
  },

  {
    course: "Food",
  },

  {
    course: "Travels",
  },

  {
    course: "Hausa Language",
  },
];

export const DueSection = ({  setReview, setSelectedReviewDeck, decks,}) => {
  const colors = {
    pink: "  bg-[#7C5CFF] ",
    html: "bg-[#FF7A59] ",
    french: "bg-[#19B394]  ",
  };

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
          {due.map((item, i) => (
            <div
              key={i}
              className="p-[10px] rounded-[10px]  border border-gray-200 rounded-[1px] flex justify-between items-center gap-[10px] flex-wrap"
            >
              <div
                className={`w-[40px] h-[40px] rounded-[10px] flex justify-center items-center   ${item.course === "JavaScript Fundamentals" ? colors.pink : item.course === "HTML & CSS" ? colors.html : item.course === "French Vocabulary" ? colors.french : colors.pink}  `}
              >
                <span className="text-white">+</span>
              </div>
              <div className=" flex-1">
                <p className="font-[700] text-[13px] text-[#20202a]">
                  {item.course}
                </p>
                <div
                  className={`w-[5px] h-[5px] w-full   ${item.course === "JavaScript Fundamentals" ? colors.pink : item.course === "HTML & CSS" ? colors.html : item.course === "French Vocabulary" ? colors.french : colors.pink}  `}
                ></div>
                <p className="font-[400] text-[11px] text-[#92929b]">
                  4 of 4 cards due
                </p>
              </div>
                <button
  type="button"
  onClick={() => {
    const selectedDeck = decks.find(
      (deck) => deck.title === item.course
    );

    console.log("Selected deck:", selectedDeck);

    setSelectedReviewDeck(selectedDeck);
    setReview(true);
  }}
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
