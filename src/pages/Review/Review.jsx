import "./Review.css";

const Review = () => {
  const statCard = [
    {
      num: 16,
      desc: "Due now",
    },

    {
      num: 0,
      desc: "Later today",
    },

    {
      num: 0,
      desc: "Tomorrow",
    },

    {
      num: 0,
      desc: "Next 7 days",
    },
  ];

  return (
    <div className="review_page">
      <div className="Num1">
        <div className="Num2">
          <p>SPACED REPETITION</p>
          <h1>Review</h1>
        </div>

        <div className="stat_div">
          {statCard.map((item, i) => (
            <div key={i} className="stat">
              <p className="s_n">{item.num}</p>
              <p className="s_d">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* <div className="Num3">
        <div className="Num4">
          <h2>0</h2>
          <p>Due now</p>
        </div>

        <div className="Num5">
          <h2>0</h2>
          <p>Later today</p>
        </div>

        <div className="Num6">
          <h2>0</h2>
          <p>Tomorrow</p>
        </div>

        <div className="Num7">
          <h2>0</h2>
          <p>Next 7 days</p>
        </div>
      </div> */}

        <div className="Num8">
          <div className="Num9">
            <p>READY TO REVIEW</p>

            <h2 className="h2_class">
              0 cards waiting
              <br />
              across 4 decks.
            </h2>

            <div className="Num10">
              <span>0 new</span>
              <span>0 to relearn</span>
              <span>≈ 0 min</span>
            </div>

            <div className="button">
              <button>Start review →</button>
            </div>
          </div>

          <div className="Num11">
            <h2>0</h2>
            <p>
              cards
              <br />
              due now
            </p>
          </div>
        </div>

        <div className="Num12">
          <div className="Num13">
            <h2 className="">Due by deck</h2>
            <p>Review one deck at a time.</p>

            <div className="Num14">
              <div className="Num15">+</div>

              <div className="Num16">
                <h3>JavaScript Fundamentals</h3>
                <div className="Num17"></div>
                <p>4 of 4 cards due</p>
              </div>

              <span>Review</span>
            </div>

            <div className="Num14">
              <div className="Num18">+</div>

              <div className="Num16">
                <h3>HTML & CSS</h3>
                <div className="Num19"></div>
                <p>4 of 4 cards due</p>
              </div>

              <span>Review</span>
            </div>

            <div className="Num14">
              <div className="Num20">+</div>

              <div className="Num16">
                <h3>French Vocabulary</h3>
                <div className="Num21"></div>
                <p>4 of 4 cards due</p>
              </div>

              <span>Review</span>
            </div>

            <div className="Num14">
              <div className="Num15">+</div>

              <div className="Num16">
                <h3>React Basics</h3>
                <div className="Num17"></div>
                <p>4 of 4 cards due</p>
              </div>

              <span>Review</span>
            </div>
          </div>

          <div className="Num22">
            <h2>Coming up</h2>
            <p>The next cards on your schedule.</p>

            <div className="Num23">Nothing scheduled yet.</div>
          </div>
        </div>

        <div className="Num24">
          <h2>Review queue</h2>
          <p>Cards waiting for your next session.</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
