import { ArrowRight } from "lucide";
import { ArrowLeft, Rotate3d, Rotate3D, Rotate3DIcon } from "lucide-react";

export const WebDev = () => {
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
            Web Development
          </span>
          <span className="font-[700] text-[13px] text-[#777]">1/4</span>
        </div>
        <div className="w-full h-[5px] bg-gray-300"></div>
      </div>

      <div className="bg-white rounded-[10px] p-[20px] flex flex-col justify-between items-center">
        <div className="space-y-[24px]">
          <div>
            <p className="text-center font-[800] text-[10px] text-[#a98dff]">
              QUESTION
            </p>
            <p className="font-[700] text-[30px] text-[#20202a] text-center">
              What does a JavaScript function return if no return statement is
              used
            </p>
          </div>

          <p className="font-[400] text-[16px] text-[#999] text-center">
            Click the card or press Space to reveal the answer
          </p>
        </div>

        <div className="mt-[40px] mx-auto flex items-center gap-[5px]">
          <Rotate3d width={10} color="#aaa" />{" "}
          <span className="font-[400] text-[10px] text-[#aaa]">
            Tap to flip
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 items-center gap-[5px]">
        <button className="font-[400] text-[10px] text-[#6959a0] border border-gray-300">
          New card - Your rating schedules the next review
        </button>
        <button>Show answer</button>
        <button>
          Prefer a quiz? Take the quiz
          {/* <ArrowRight /> */}
        </button>
      </div>
    </div>
  );
};
