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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">

          <div className="h-24 w-full rounded-[20px] bg-white     flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-bold"> 0% </h1>
            <p className="text-[13px] text-gray-400"> Average quiz score </p>
          </div>

          <div className="h-24 w-full rounded-[20px] bg-white     flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-bold"> 0 </h1>
            <p className="text-[13px] text-gray-400"> Cards mastered </p>
          </div>

          <div className="h-24 w-full rounded-[20px] bg-white     flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-bold"> 0 </h1>
            <p className="text-[13px] text-gray-400"> Cards learning </p>
          </div>

          <div className="h-24 w-full rounded-[20px] bg-white     flex flex-col items-center justify-center ">
            <h1 className="text-[20px] font-bold"> 0 </h1>
            <p className="text-[13px] text-gray-400"> Day streak </p>
          </div>
        </div>
    
{/* Big Cards */}
        {/* <div className="flex flex-wrap justify-between gap-y-10"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
{/* card 1 */}
          <div className="w-full rounded-3xl bg-[#d64f9c] p-6 sm:p-6 shadow-sm border border-gray-50 flex flex-col justify-between min-h-60 text-left">

            <div className="flex justify-between items-start w-full gap-9">
              <div className="">
                <h1 className="text-[22px] sm:text-[18px]  font-bold text-[#FFFFFF]"> Mastery overview </h1>
                <p className="text-[13px] text-[#000000]mt-0.5"> How far your cards have progressed. </p>
              </div>
              <div className="bg-[#b32977] text-[13px] font-semibold text-[#ffffff] rounded-xl px-3 py-1.5 flex items-center justify-center">
                0%
              </div>
            </div>

            <div className="w-full h-3 bg-[#f0edff] rounded-full my-4">
              <div className="h-full bg-[#F0F1F5] rounded-full w-full"></div>
            </div>

            <div className="flex gap-4 text-[13px] text-black mt-0.5">
              <div className="bg-[#b32977] text-[13px] font-semibold text-[#ffffff] rounded-xl px-3 py-1.5 flex items-center justify-center shrink-0 whitespace-nowrap">
              0 attempts
              </div>
              <div className="bg-[#b32977] text-[13px] font-semibold text-[#ffffff] rounded-xl px-3 py-1.5 flex items-center justify-center shrink-0 whitespace-nowrap">
              0 attempts
              </div>
              <div className="bg-[#b32977] text-[13px] font-semibold text-[#ffffff] rounded-xl px-3 py-1.5 flex items-center justify-center shrink-0 whitespace-nowrap">
              0 attempts
              </div>
            </div>

          </div>

{/* card 2 */}
          <div className="w-full h-70 rounded-3xl bg-[#7C5CFF] p-5 sm:p-6 shadow-sm border border-gray-50 flex flex-col gap-6 justify-between min-h-60">

            <div className="flex justify-between items-start w-full gap-2 text-left">
              <div className="">
                <h1 className="text-[22px] sm:text-[18px] font-bold text-white"> Study activity </h1>
                <p className="text-[13px] text-black mt-0.5"> Cards reviewed over the last 7 days. </p>
              </div>
              <div className="bg-[#6545DB] text-[13px] font-semibold text-[#ffffff] rounded-xl px-3 py-1.5 flex items-center justify-center">
                0 this week
              </div>
            </div>

          <div className="flex gap-0.5">
{/* Friday */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full max-w-7 sm:max-w-9 h-20 sm:h-24 bg-[#F0F1F5] rounded-md sm:rounded-lg relative overflow-hidden flex items-end">
                <div className="h-4 bg-[#C7CDDB] w-full rounded-b-mb sm:rounded-b-lg"></div>
              </div>
                <p className="text-[11px] sm:text-[12px] text-white font-medium"> Fri </p>
            </div>

{/* Saturday */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full max-w-7 sm:max-w-9 h-20 sm:h-24 bg-[#F0F1F5] rounded-md sm:rounded-lg relative overflow-hidden flex items-end">
                <div className="h-4 bg-[#C7CDDB] w-full rounded-b-mb sm:rounded-b-lg"></div>
              </div>
                <p className="text-[11px] sm:text-[12px] text-white font-medium"> Sat </p>
            </div>

{/* Sunday */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full max-w-7 sm:max-w-9 h-20 sm:h-24 bg-[#F0F1F5] rounded-md sm:rounded-lg relative overflow-hidden flex items-end">
                <div className="h-4 bg-[#C7CDDB] w-full rounded-b-mb sm:rounded-b-lg"></div>
              </div>
                <p className="text-[11px] sm:text-[12px] text-white font-medium"> Sun </p>
            </div>

{/* Monday */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full max-w-7 sm:max-w-9 h-20 sm:h-24 bg-[#F0F1F5] rounded-md sm:rounded-lg relative overflow-hidden flex items-end">
                <div className="h-4 bg-[#C7CDDB] w-full rounded-b-mb sm:rounded-b-lg"></div>
              </div>
                <p className="text-[11px] sm:text-[12px] text-white font-medium"> Mon </p>
            </div>

{/* Tuesday */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full max-w-7 sm:max-w-9 h-20 sm:h-24 bg-[#F0F1F5] rounded-md sm:rounded-lg relative overflow-hidden flex items-end">
                <div className="h-4 bg-[#C7CDDB] w-full rounded-b-mb sm:rounded-b-lg"></div>
              </div>
                <p className="text-[11px] sm:text-[12px] text-white font-medium"> Tue </p>
            </div>

{/* Wednesday */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full max-w-7 sm:max-w-9 h-20 sm:h-24 bg-[#F0F1F5] rounded-md sm:rounded-lg relative overflow-hidden flex items-end">
                <div className="h-4 bg-[#C7CDDB] w-full rounded-b-mb sm:rounded-b-lg"></div>
              </div>
                <p className="text-[11px] sm:text-[12px] text-white font-medium"> Wed </p>
            </div>

{/* Thursday */}
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full max-w-7 sm:max-w-9 h-20 sm:h-24 bg-[#F0F1F5] rounded-md sm:rounded-lg relative overflow-hidden flex items-end">
                <div className="h-4 bg-[#C7CDDB] w-full rounded-b-mb sm:rounded-b-lg"></div>
              </div>
                <p className="text-[11px] sm:text-[12px] text-white font-medium"> Thur </p>
            </div>
          </div>

        </div>

{/* card 3 */}
         {/* <div className="h-70 w-120 rounded-[20px] bg-white     flex flex-col gap-5"> */}
        <div className="w-full max-w-xl rounded-3xl bg-[#FF7A59] p-5 sm:p-6 shadow-sm border border-gray-50 flex flex-col justify-between min-h-65 gap-3">

            <div className="flex justify-between w-full px-3 text-left">
              <div className="">
                <h1 className="text-[22px] sm:text-[18px] font-bold text-white"> Difficulty ratings </h1>
                <p className="text-[13px] text-black mt-0.5"> Our latest rating for each reviewed card. </p>
              </div>
            </div>

{/* Ratings Progress List */}
          <div className="flex flex-col gap-4 w-full py-1 mx-auto">
        
{/* Again Row */}
          <div className="flex items-center justify-between w-full max-w-[310px] sm:max-w-[370px] gap-3 mx-auto">
            <p className=" w-12 text-[14px] text-white font-medium"> Again </p>
            <div className="flex-1 h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden mx-2 max-w-[150px] sm:max-w-[250px]"></div>
            <p className="w-4 text-right text-[14px] font-bold text-white"> 0 </p>
          </div>

{/* Hard Row */}
          <div className="flex items-center justify-between w-full max-w-[310px] sm:max-w-[370px] gap-3 mx-auto">
            <p className=" w-12 text-[14px] text-white font-medium"> Hard </p>
            <div className="flex-1 h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden mx-2 max-w-[150px] sm:max-w-[250px]"></div>
            <p className="w-4 text-right text-[14px] font-bold text-white"> 0 </p>
          </div>

{/* Good Row */}
          <div className="flex items-center justify-between w-full max-w-[310px] sm:max-w-[370px] gap-3 mx-auto">
            <p className=" w-12 text-[14px] text-white font-medium"> Good </p>
            <div className="flex-1 h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden mx-2 max-w-[150px] sm:max-w-[250px]"></div>
            <p className="w-4 text-right text-[14px] font-bold text-white"> 0 </p>
          </div>

{/* Easy Row */}
          <div className="flex items-center justify-between w-full max-w-[310px] sm:max-w-[370px] gap-3 mx-auto">
            <p className=" w-12 text-[14px] text-white font-medium"> Easy </p>
            <div className="flex-1 h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden mx-2 max-w-[150px] sm:max-w-[250px]"></div>
            <p className="w-4 text-right text-[14px] font-bold text-white"> 0 </p>
          </div>
        </div>

      </div>

{/* card 4 */}
          <div className="w-full max-w-xl rounded-3xl bg-[#19B394] p-5 sm:p-6 shadow-sm border border-gray-50 flex flex-col justify-between min-h-65">

            <div className="flex justify-between items-start w-full gap-2">
              <div>
                <h1 className="text-[22px] sm:text-[18px] font-bold text-[#ffffff]"> Quiz performance </h1>
                <p className="text-[13px] text-black mt-0.5"> Your most recent attempts. </p>
              </div>
              <div className="bg-[#097e66] text-[13px] font-semibold text-[#ffffff] rounded-xl px-3 py-1.5 flex items-center justify-center shrink-0 whitespace-nowrap">
              0 attempts
              </div>
            </div>

            <div className="w-full min-h-25 border border-dashed border-gray-200 rounded-2xl flex items-center justify-center p-4 mt-4">
              <p className="text-[14px] text-white text-center">
              Take your first quiz to see performance here.
              </p>
            </div>

          </div>

      </div>

{/* Last Card */}
      <div className="w-full max-w-5xl rounded-3xl bg-[#008000] p-6 shadow-sm border border-gray-50 flex flex-col gap-6">
            
            <div className="flex justify-between items-start w-full">
              <div>
                <h2 className="text-[22px] sm:text-[18px] font-bold text-white">Mastery by deck</h2>
                <p className="text-[13px] text-black mt-0.5">Calculated from your latest difficulty ratings.</p>
              </div>
              <div className="bg-[#054e05] text-[13px] font-semibold text-[#ffffff] rounded-xl px-3 py-1.5 flex items-center justify-center">
                0% overall
              </div>
            </div>

            <div className="flex flex-col gap-5 w-full py-1">
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full text-[14px]">
                  <p className="font-bold text-white"> Web Development </p>
                  <p className="text-white">0% <span className="mx-1">•</span> 4 cards</p>
                </div>
                <div className="w-full h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full text-[14px]">
                  <p className="font-bold text-white"> Food </p>
                  <p className="text-white">0% <span className="mx-1 ">•</span> 4 cards</p>
                </div>
                <div className="w-full h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full text-[14px]">
                  <p className="font-bold text-white"> Travels </p>
                  <p className="text-white">0% <span className="mx-1">•</span> 4 cards</p>
                </div>
                <div className="w-full h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full text-[14px]">
                  <p className="font-bold text-[#ffffff]"> Hausa Language </p>
                  <p className="text-white">0% <span className="mx-1">•</span> 4 cards</p>
                </div>
                <div className="w-full h-2.5 bg-[#F0F1F5] rounded-full relative overflow-hidden"></div>
              </div>

            </div>

          </div>





































    </div>
  )
}

export default Statistics