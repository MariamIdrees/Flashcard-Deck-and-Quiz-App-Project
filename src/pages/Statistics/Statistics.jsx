// import React from 'react'

const Statistics = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10">
        
{/* page Topic */}
        <div className="flex flex-col gap-2 "> 
          <p className="text-[15px] font-extrabold decoration-[#8D8DA6]"> 
            INSIGHTS </p>
          <h1 className="text-3xl font-semibold"> 
            Your statistics </h1>
        </div>

{/* Small Cards */}
        <div className="flex justify-between w-full">
          <div className="h-24 w-52.5 rounded-[20px] bg-white     flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-bold"> 0% </h1>
            <p className="text-[13px] text-gray-400"> Average quiz score </p>
          </div>

          <div className="h-24 w-52.5 rounded-[20px] bg-white     flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-bold"> 0 </h1>
            <p className="text-[13px] text-gray-400"> Cards mastered </p>
          </div>

          <div className="h-24 w-52.5 rounded-[20px] bg-white     flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-bold"> 0 </h1>
            <p className="text-[13px] text-gray-400"> Cards learning </p>
          </div>

          <div className="h-24 w-52.5 rounded-[20px] bg-white     flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-bold"> 0 </h1>
            <p className="text-[13px] text-gray-400"> Day streak </p>
          </div>
        </div>
    
{/* Big Cards */}
        <div className="flex flex-wrap justify-between gap-y-10" >

{/* card 1 */}
          <div className="w-120 h-70 rounded-3xl bg-white p-6 shadow-sm border border-gray-50 flex flex-col gap-6">

            <div className="flex justify-between items-start w-full">
              <div className="">
                <h1 className="text-[22px] font-bold"> Mastery overview </h1>
                <p className="text-[13px] text-gray-400 mt-0.5"> How far your cards have progressed. </p>
              </div>
              <div className="bg-[#F0EEFF] text-[13px] font-semibold text-[#5A67D8] rounded-xl px-3 py-1.5 flex items-center justify-center">
                0%
              </div>
            </div>

            <div className="w-109 h-3 bg-[#f0edff] rounded-full mx-auto">
              <div className="h-full bg-[#F0F1F5] rounded-full w-full"></div>
            </div>

            <div className="flex gap-4 text-[13px] text-gray-400 mt-0.5">
              <p><span className="font-bold text-black">0</span> mastered</p>
              <p><span className="font-bold text-black">0</span> learning</p>
              <p><span className="font-bold text-black">16</span> new</p>
            </div>

          </div>

{/* card 2 */}
          <div className="w-120 h-70 rounded-3xl bg-white p-6 shadow-sm border border-gray-50 flex flex-col gap-6">

            <div className="flex justify-between items-start w-full">
              <div className="">
                <h1 className="text-[22px] font-bold"> Study activity </h1>
                <p className="text-[13px] text-gray-400 mt-0.5"> Cards reviewed over the last 7 days. </p>
              </div>
              <div className="bg-[#F0EEFF] text-[13px] font-semibold text-[#5A67D8] rounded-xl px-3 py-1.5 flex items-center justify-center">
                0 this week
              </div>
            </div>

          <div className="flex gap-0.5">
{/* Friday */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-10 h-28 bg-[#F0F1F5] rounded-[10px] relative overflow-hidden flex items-end">
                <div className="h-6 bg-[#C7CDDB] w-full rounded-b-[10px]"></div>
              </div>
                <p className="text-[13px] text-gray-400 font-medium">Fri</p>
            </div>

{/* Saturday */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-10 h-28 bg-[#F0F1F5] rounded-[10px] relative overflow-hidden flex items-end">
                <div className="h-6 bg-[#C7CDDB] w-full rounded-b-[10px]"></div>
              </div>
                <p className="text-[13px] text-gray-400 font-medium">Sat</p>
            </div>

{/* Sunday */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-10 h-28 bg-[#F0F1F5] rounded-[10px] relative overflow-hidden flex items-end">
                <div className="h-6 bg-[#C7CDDB] w-full rounded-b-[10px]"></div>
              </div>
                <p className="text-[13px] text-gray-400 font-medium">Sun</p>
            </div>

{/* Monday */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-10 h-28 bg-[#F0F1F5] rounded-[10px] relative overflow-hidden flex items-end">
                <div className="h-6 bg-[#C7CDDB] w-full rounded-b-[10px]"></div>
              </div>
                <p className="text-[13px] text-gray-400 font-medium">Mon</p>
            </div>

{/* Tuesday */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-10 h-28 bg-[#F0F1F5] rounded-[10px] relative overflow-hidden flex items-end">
                <div className="h-6 bg-[#C7CDDB] w-full rounded-b-[10px]"></div>
              </div>
                <p className="text-[13px] text-gray-400 font-medium">Tue</p>
            </div>

{/* Wednesday */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-10 h-28 bg-[#F0F1F5] rounded-[10px] relative overflow-hidden flex items-end">
                <div className="h-6 bg-[#C7CDDB] w-full rounded-b-[10px]"></div>
              </div>
                <p className="text-[13px] text-gray-400 font-medium">Wed</p>
            </div>

{/* Thursday */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-10 h-28 bg-[#F0F1F5] rounded-[10px] relative overflow-hidden flex items-end">
                <div className="h-6 bg-[#C7CDDB] w-full rounded-b-[10px]"></div>
              </div>
                <p className="text-[13px] text-gray-400 font-medium">Thu</p>
            </div>
          </div>

        </div>

{/* card 3 */}
         {/* <div className="h-70 w-120 rounded-[20px] bg-white     flex flex-col gap-5"> */}
          <div className="w-120 h-70 rounded-3xl bg-white p-3 shadow-sm border border-gray-50 flex flex-col gap-6">
            <div className="flex justify-between w-full px-5 mt-5">
              <div className="">
                <h1 className="text-[22px] font-bold"> Difficulty ratings </h1>
                <p className="text-[13px] text-gray-400 mt-0.5"> Our latest rating for each reviewed card. </p>
              </div>
            </div>

{/* Ratings Progress List */}
          <div className="flex flex-col gap-4.5 w-100 py-1 mx-auto">
        
{/* Again Row */}
          <div className="flex items-center justify-between w-full gap-4">
            <span className="text-[14px] text-gray-500 font-medium">Again</span>
            <div className="flex-1 h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
            <span className="w-4 text-right text-[14px] font-bold text-[#1E1E2F]">0</span>
          </div>

{/* Hard Row */}
          <div className="flex items-center justify-between w-full gap-4">
            <span className="text-[14px] text-gray-500 font-medium">Hard</span>
            <div className="flex-1 h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
            <span className="w-4 text-right text-[14px] font-bold text-[#1E1E2F]">0</span>
          </div>

{/* Good Row */}
          <div className="flex items-center justify-between w-full gap-4">
            <span className="text-[14px] text-gray-500 font-medium">Good</span>
            <div className="flex-1 h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
            <span className="w-4 text-right text-[14px] font-bold text-[#1E1E2F]">0</span>
          </div>

{/* Easy Row */}
          <div className="flex items-center justify-between w-full gap-4">
            <span className="text-[14px] text-gray-500 font-medium">Easy</span>
            <div className="flex-1 h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
            <span className="w-4 text-right text-[14px] font-bold text-[#1E1E2F]">0</span>
          </div>
        </div>

      </div>

{/* card 4 */}
          <div className="w-120 h-70 rounded-3xl bg-white p-6 shadow-sm border border-gray-50 flex flex-col gap-6">

            <div className="flex justify-between items-start w-full">
              <div className="">
                <h1 className="text-[22px] font-bold"> Quiz performance </h1>
                <p className="text-[13px] text-gray-400 mt-0.5"> Your most recent attempts. </p>
              </div>
              <div className="bg-[#F0EEFF] text-[13px] font-semibold text-[#5A67D8] rounded-xl px-3 py-1.5 flex items-center justify-center">
                0% attempts
              </div>
            </div>

            <div className="w-110 min-h-20 border border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-4 mx-auto">
              <p className="text-[14px] text-gray-400 text-center">
              Take your first quiz to see performance here. </p>
            </div>

          </div>

      </div>

{/* Last Card */}
      <div className="w-full max-w-5xl rounded-3xl bg-white p-6 shadow-sm border border-gray-50 flex flex-col gap-6">
            
            <div className="flex justify-between items-start w-full">
              <div>
                <h2 className="text-[22px] font-bold">Mastery by deck</h2>
                <p className="text-[13px] text-gray-400 mt-0.5">Calculated from your latest difficulty ratings.</p>
              </div>
              <div className="bg-[#F0EEFF] text-[13px] font-semibold text-[#5A67D8] rounded-xl px-3 py-1.5 flex items-center justify-center">
                0% overall
              </div>
            </div>

            <div className="flex flex-col gap-5 w-full py-1">
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full text-[14px]">
                  <span className="font-bold">JavaScript Fundamentals</span>
                  <span className="text-gray-400">0% <span className="mx-1">•</span> 4 cards</span>
                </div>
                <div className="w-full h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full text-[14px]">
                  <span className="font-bold">HTML & CSS</span>
                  <span className="text-gray-400">0% <span className="mx-1">•</span> 4 cards</span>
                </div>
                <div className="w-full h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full text-[14px]">
                  <span className="font-bold">French Vocabulary</span>
                  <span className="text-gray-400">0% <span className="mx-1">•</span> 4 cards</span>
                </div>
                <div className="w-full h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full text-[14px]">
                  <span className="font-bold text-[#1E1E2F]">React Basics</span>
                  <span className="text-gray-400">0% <span className="mx-1">•</span> 4 cards</span>
                </div>
                <div className="w-full h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
              </div>

            </div>

          </div>





































    </div>
  )
}

export default Statistics