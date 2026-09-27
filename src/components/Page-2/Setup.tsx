import React from "react";
import { BsLightning } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { RiArrowRightLine, RiDivideFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Setup() {
  return (
    <div className="p-4 flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col gap-4">
        <p className="text-kal-gold w-fit text-center bg-kal-surface px-4 py-2 text-[10px] rounded-4xl">
          COGNITIVE CALIBRATION
        </p>
        <h1 className="text-4xl font-extrabold">Set up your practice</h1>
        <p className="text-gray-500">Choose how you want to train.</p>
      </div>
      <div className="bg-[#1A1B20] my-4 w-1/2 p-8 rounded-xl">
        <div className="flex w-full justify-between text-[12px] font-bold font-mono">
          <h5 className="">01 OPERATION MODE</h5>
          <p className="text-gray-400">Multi-select enabled</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 my-6">
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center">
            <p className="text-xl my-2 group-hover:text-black  text-gray-500">
              <IoIosAdd />
            </p>
            <h2 className="text-gray-500 group-hover:text-white">Addition</h2>
          </div>
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center">
            <p className="text-xl my-2 group-hover:text-black  text-gray-500">
              <FaMinus />
            </p>
            <h2 className="text-gray-500 group-hover:text-white">
              Substration
            </h2>
          </div>
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center">
            <p className="text-xl my-2 group-hover:text-black  text-gray-500">
              <RxCross2 />
            </p>
            <h2 className="text-gray-500 group-hover:text-white">
              Multiplication
            </h2>
          </div>
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center">
            <p className="text-xl my-2 group-hover:text-black  text-gray-500">
              <RiDivideFill />
            </p>
            <h2 className="text-gray-500 group-hover:text-white">Division</h2>
          </div>
        </div>
        {/* </div>
      <div className="bg-[#1A1B20] w-1/2 p-8 rounded-xl"> */}
        <div className="flex w-full justify-between text-[12px] font-bold font-mono">
          <h5 className="">02 NUMBER DIFFICULTY</h5>
          <p className="text-kal-gold">Selected: Level 1</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 my-6">
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center">
            <p className="text-xl my-2 group-hover:text-white  text-gray-500">
              1 digit
            </p>
            <p className="text-xs text-gray-500 group-hover:text-white">
              e.g. 7 + 8
            </p>
          </div>
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center">
            <p className="text-xl my-2 group-hover:text-white  text-gray-500">
              2 digits
            </p>
            <h2 className="text-xs text-gray-500 group-hover:text-white">
              e.g. 42 + 87
            </h2>
          </div>
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center">
            <p className="text-xl my-2 group-hover:text-white  text-gray-500">
              3 digits
            </p>
            <h2 className="text-xs text-gray-500 group-hover:text-white">
              e.g. 847 = 245
            </h2>
          </div>
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center">
            <p className="text-xl my-2 group-hover:text-white  text-gray-500">
              4 digits
            </p>
            <h2 className="text-xs text-gray-500 group-hover:text-white">
              e.g. 5374 + 2425
            </h2>
          </div>
        </div>
        <div className="flex w-full justify-between text-[12px] font-bold font-mono">
          <h5 className="">03 NUMBER OF QUESTIONS</h5>
          {/* <p className="text-kal-gold">Selected: Level 2</p> */}
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 my-6">
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl">
            <p className="text-3xl my-2 group-hover:text-white  text-white">
              10
            </p>
            <p className="text-xs text-gray-500 group-hover:text-white">
              Quick Sprint
            </p>
          </div>
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl ">
            <p className="text-3xl my-2 group-hover:text-white  text-white">
              20
            </p>
            <p className="text-xs text-gray-500 group-hover:text-white">
              Standard Session
            </p>
          </div>
          <div className="bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl">
            <p className="text-3xl my-2 group-hover:text-white  text-white">
              50
            </p>
            <p className="text-xs text-gray-500 group-hover:text-white">
              Endurance Run
            </p>
          </div>
        </div>
        <div className="bg-kal-card p-2 rounded-2xl">
          <div className="border-b flex items-center p-2 border-gray-800">
            <div className="flex items-center gap-2">
              <div className="p-3 h-fit bg-gray-800/40 rounded w-fit">
                <BsLightning />
              </div>
              <div className="font-sans">
                <h1>Instant Feedback</h1>
                <p className="text-gray-600 text-sm">Displays correct result immediately after keystroke</p>
              </div>
            </div>
            <button></button>
          </div>
          <div className="flex items-center p-2">
            <div className="flex items-center gap-2">
              <div className="p-3 h-fit bg-gray-800/40 rounded w-fit">
                <BsLightning />
              </div>
              <div className="font-sans">
                <h1>Hardcore Mode</h1>
                <p className="text-gray-600 text-sm">No timer pause. Penalize consecutive skips</p>
              </div>
            </div>
            <button></button>
          </div>
        </div>
        <Link to={'/questions'} className="flex items-center text-gray-700 hover:text-white transition cursor-pointer hover:shadow-[0px_0px_15px_gray] bg-[#7C3AED] p-4 my-4 w-full rounded-2xl font-extrabold justify-center">Start Practice <RiArrowRightLine /></Link>
      </div>
    </div>
  );
}

export default Setup;
