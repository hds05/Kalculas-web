import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { CgInfo } from "react-icons/cg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiBullseye } from "react-icons/gi";
import { RiFocus2Fill } from "react-icons/ri";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuTicketCheck } from "react-icons/lu";
import { MdOutlineNightlight } from "react-icons/md";

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

      <div className="m-14 py-8">
        <div className="text-white my-6 w-full">
          <div className="w-fit p-2 rounded-4xl flex items-center gap-2 font-bold border border-kal-gold">
            <div className="p-1 bg-kal-gold h-fit rounded-full"></div>
            <h2 className="text-kal-gold text-[10px] font-mono ">
              TRI-PHASE TRAINING
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl  font-bold w-1/2">
              Engineered for Quant Performance
            </h1>
            <p className="font-bold text-sm my-4 w-[500px]">
              A high-cadence execution framework designed to transition
              conscious calculations into automatic muscular memory.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 my-4 gap-2">
          <div className="bg-gray-900 p-4 rounded-xl">
            <div className="bg-violet-500/20 p-2 w-fit rounded shadow-[0px_0px_2px_violet]">
              <AiOutlineThunderbolt />
            </div>
            <h1 className="my-4 font-bold">
              SPEED <span className="text-gray-500 ml-2 text-[10px]">/01</span>
            </h1>
            <p className="text-sm font-sans">
              Improve calculation time with adaptive rapid- fire sessions and
              live micro-second latency feedback loops.
            </p>
            <div className="flex text-[10px] items-center justify-between mt-4 border-t border-gray-600/30 pt-2">
              <p className="my-2">SUB SECOND PACING</p>
              <FaArrowTrendUp />
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl">
            <div className="bg-violet-500/20 p-2 w-fit rounded shadow-[0px_0px_2px_violet]">
              <GiBullseye />
            </div>
            <h1 className="my-4 font-bold">
              {" "}
              ACCURACY <span className="text-gray-500 text-[10px]">/02</span>
            </h1>
            <p className="text-sm font-sans">
              Reduce mistakes systematically throgh algorithmspacd repetitionand
              physical atribumetic decomposition.
            </p>
            <div className="flex text-[10px] items-center justify-between mt-4 border-t border-gray-600/30 pt-2">
              <p className="my-2">TARGET 99.4% CEILING</p>
              <LuTicketCheck />
            </div>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl">
            <div className="bg-violet-500/20 p-2 w-fit rounded shadow-[0px_0px_2px_violet]">
              <RiFocus2Fill />
            </div>
            <h1 className="my-4 font-bold">
              {" "}
              FOCUS <span className="text-gray-500 text-[10px]">/03</span>
            </h1>
            <p className="text-sm font-sans">
              Train your mental calculation capability within a zero-distraction
              dark terminal engineered for uninterrupted flow.
            </p>
            <div className="flex text-[10px] items-center justify-between mt-4 border-t border-gray-600/30 pt-2">
              <p className="my-2">ZERO VISUAL DRAG</p>
              <MdOutlineNightlight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
