import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { CgInfo } from "react-icons/cg";

function Dashboard() {
  return (
    // <div className="flex flex-col lg:flex-row justify-evenly gap-4">
    <div className="">
      {/* <div className="p-4 text-amber-400 font-mono border rounded-4xl w-[300px] text-center cursor-pointer transition transform hover:scale-105 bg-black hover:z-50 hover:shadow-[0px_0px_6px_purple] hover:text-white">
        Mental Math
      </div>
      <div className="p-4 text-amber-400 font-mono border rounded-4xl w-[300px] text-center cursor-pointer transition transform hover:scale-105 bg-black hover:z-50 hover:shadow-[0px_0px_6px_purple] hover:text-white">
        Train your Calculation Speed.
      </div> */}
      <div className="m-14 py-8 flex justify-between">
        <div className="text-white w-1/2">
          <div className="w-fit border border-kal-gold p-2 rounded-4xl flex items-center text-xs gap-2 font-bold font-mono">
            <span className="p-1 bg-kal-gold h-fit rounded-full"></span>
            <h2>Mental Math Training</h2>
          </div>
          <h1 className="text-6xl my-8 font-mono">
            Train you mind. <br /> Calculate faster.
          </h1>
          <p className="font-bold my-4">
            Build calculation speed, improve accuracy, and sharpen your mental
            math through focused, high-cadece neuro-athletic practice.
          </p>

          <div className="flex gap-4 my-9">
            <button className="flex justify-center items-center gap-2 font-bold px-4 py-2 bg-[#7C3BEB] text-sm rounded-xl cursor-pointer shadow-[0px_0px_2px_purple]">
              Start Practice <RiArrowRightLine />
            </button>
            <div className="relative group inline-block">
              <button
                className="flex justify-center items-center gap-2 font-bold px-4 py-2
               shadow-[0px_0px_2px_purple] bg-indigo-950/30
               text-sm rounded-xl cursor-pointer"
              >
                <CgInfo />
                How it works
              </button>

              {/* Info on hover */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-3
               w-64 p-3 rounded-lg
               bg-zinc-900 text-gray-200 text-sm
               shadow-lg border border-purple-900
               opacity-0 invisible
               group-hover:opacity-100 group-hover:visible
               transition-all duration-200"
              >
                Practice mental math problems to improve your calculation speed
                and accuracy.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[500px] p-4">
          <div className="bg-[#050818] shadow-[-1px_-1px_1px_purple] p-6 rounded-4xl">
            <div>
              <span className="text-violet-100 font-bold font-mono p-1 rounded-lg shadow-[0px_0px_5px_violet] bg-violet-950 shadow-[0px_0px_2px_violet-300]">
                Mental Math
              </span>
            </div>
            <div className="my-6 text-white bg-black w-full p-6 rounded-lg text-right text-6xl font-bold">
              <div>847</div>
              <div className="flex gap-8 justify-end">
                <span>+</span>
                <span>296</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
