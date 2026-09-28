import React, { useState } from "react";
import { BsLightning } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { RiArrowRightLine, RiDivideFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function Setup() {
  const [operation, setOperation] = useState("addition");
  const [numbDifficulty, setNumbDifficulty] = useState("None");
  const [numQuestion, setNumQuestion] = useState(10);
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
          {/* <p className="text-gray-400">Multi-select enabled</p> */}
          <p className="text-kal-gold">Selected: {operation.toUpperCase()}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 my-6">
          <div
            onClick={() => {
              setOperation("addition");
            }}
            className={`${operation === "addition" ? "bg-kal-purple " : "bg-gray-800"}  group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center`}
          >
            <p
              className={`${operation === "addition" ? "text-white group-hover:text-white" : "text-gray-500"} text-xl my-2 group-hover:text-black`}
            >
              <IoIosAdd />
            </p>
            <h2
              className={`${operation === "addition" ? "text-white group-hover:text-white" : "text-gray-500"} group-hover:text-white`}
            >
              Addition
            </h2>
          </div>
          <div
            onClick={() => {
              setOperation("subtration");
            }}
            className={`${operation === "subtration" ? "bg-kal-purple " : "bg-gray-800"} group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center`}
          >
            <p
              className={`${operation === "subtration" ? "text-white group-hover:text-white" : "text-gray-500"} text-xl my-2 group-hover:text-black`}
            >
              <FaMinus />
            </p>
            <h2
              className={`${operation === "subtration" ? "text-white group-hover:text-white" : "text-gray-500"} group-hover:text-white`}
            >
              Subtration
            </h2>
          </div>
          <div
            onClick={() => {
              setOperation("multiplication");
            }}
            className={`${operation === "multiplication" ? "bg-kal-purple " : "bg-gray-800"} bg-gray-800 group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center`}
          >
            <p
              className={`${operation === "multiplication" ? "text-white group-hover:text-white" : "text-gray-500"} text-xl my-2 group-hover:text-black  `}
            >
              <RxCross2 />
            </p>
            <h2
              className={`${operation === "multiplication" ? "text-white group-hover:text-white" : "text-gray-500"}  group-hover:text-white`}
            >
              Multiplication
            </h2>
          </div>
          <div
            onClick={() => {
              setOperation("division");
            }}
            className={`${operation === "division" ? "bg-kal-purple " : "bg-gray-800"}  group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center`}
          >
            <p
              className={`${operation === "division" ? "text-white group-hover:text-white" : "text-gray-500"} text-xl my-2 group-hover:text-black`}
            >
              <RiDivideFill />
            </p>
            <h2
              className={`${operation === "division" ? "text-whit group-hover:text-whitee " : "text-gray-500"} group-hover:text-white`}
            >
              Division
            </h2>
          </div>
        </div>
        {/* </div>
      <div className="bg-[#1A1B20] w-1/2 p-8 rounded-xl"> */}
        <div className="flex w-full justify-between text-[12px] font-bold font-mono">
          <h5 className="">02 NUMBER DIFFICULTY</h5>
          <p className="text-kal-gold">Selected: {numbDifficulty}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 my-6">
          {/* 1 Digit */}
          <div
            onClick={() => setNumbDifficulty("level-1")}
            className={`${
              numbDifficulty === "level-1" ? "bg-kal-purple" : "bg-gray-800"
            } group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center`}
          >
            <p
              className={`${
                numbDifficulty === "level-1" ? "text-white" : "text-gray-500"
              } text-xl my-2 group-hover:text-white`}
            >
              1 digit
            </p>
            <p
              className={`${
                numbDifficulty === "level-1" ? "text-white" : "text-gray-500"
              } text-xs group-hover:text-white`}
            >
              e.g. 7 + 8
            </p>
          </div>

          {/* 2 Digits */}
          <div
            onClick={() => setNumbDifficulty("level-2")}
            className={`${
              numbDifficulty === "level-2" ? "bg-kal-purple" : "bg-gray-800"
            } group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center`}
          >
            <p
              className={`${
                numbDifficulty === "level-2" ? "text-white" : "text-gray-500"
              } text-xl my-2 group-hover:text-white`}
            >
              2 digits
            </p>
            <p
              className={`${
                numbDifficulty === "level-2" ? "text-white" : "text-gray-500"
              } text-xs group-hover:text-white`}
            >
              e.g. 42 + 87
            </p>
          </div>

          {/* 3 Digits */}
          <div
            onClick={() => setNumbDifficulty("level-3")}
            className={`${
              numbDifficulty === "level-3" ? "bg-kal-purple" : "bg-gray-800"
            } group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center`}
          >
            <p
              className={`${
                numbDifficulty === "level-3" ? "text-white" : "text-gray-500"
              } text-xl my-2 group-hover:text-white`}
            >
              3 digits
            </p>

            <p
              className={`${
                numbDifficulty === "level-3" ? "text-white" : "text-gray-500"
              } text-xs group-hover:text-white`}
            >
              e.g. 847 + 245
            </p>
          </div>

          {/* 4 Digits */}
          <div
            onClick={() => setNumbDifficulty("level-4")}
            className={`${
              numbDifficulty === "level-4" ? "bg-kal-purple" : "bg-gray-800"
            } group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl flex flex-col justify-center items-center`}
          >
            <p
              className={`${
                numbDifficulty === "level-4" ? "text-white" : "text-gray-500"
              } text-xl my-2 group-hover:text-white`}
            >
              4 digits
            </p>

            <p
              className={`${
                numbDifficulty === "level-4" ? "text-white" : "text-gray-500"
              } text-xs group-hover:text-white`}
            >
              e.g. 5374 + 2425
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between text-[12px] font-bold font-mono">
          <h5 className="">03 NUMBER OF QUESTIONS</h5>
          <p className="text-kal-gold">Questions: {numQuestion}</p>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 my-6">
          {/* 10 Questions */}
          <div
            onClick={() => setNumQuestion(10)}
            className={`${
              numQuestion === 10 ? "bg-kal-purple" : "bg-gray-800"
            } group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl`}
          >
            <p
              className={`text-3xl my-2 ${
                numQuestion === 10 ? "text-white" : "text-white"
              } group-hover:text-white`}
            >
              10
            </p>

            <p
              className={`text-xs ${
                numQuestion === 10 ? "text-white" : "text-gray-500"
              } group-hover:text-white`}
            >
              Quick Sprint
            </p>
          </div>

          {/* 20 Questions */}
          <div
            onClick={() => setNumQuestion(20)}
            className={`${
              numQuestion === 20 ? "bg-kal-purple" : "bg-gray-800"
            } group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl`}
          >
            <p className={`text-3xl my-2 text-white group-hover:text-white`}>
              20
            </p>

            <p
              className={`text-xs ${
                numQuestion === 20 ? "text-white" : "text-gray-500"
              } group-hover:text-white`}
            >
              Standard Session
            </p>
          </div>

          {/* 50 Questions */}
          <div
            onClick={() => setNumQuestion(50)}
            className={`${
              numQuestion === 50 ? "bg-kal-purple" : "bg-gray-800"
            } group hover:bg-kal-purple cursor-pointer p-4 h-[100px] rounded-2xl`}
          >
            <p className={`text-3xl my-2 text-white group-hover:text-white`}>
              50
            </p>

            <p
              className={`text-xs ${
                numQuestion === 50 ? "text-white" : "text-gray-500"
              } group-hover:text-white`}
            >
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
                <p className="text-gray-600 text-sm">
                  Displays correct result immediately after keystroke
                </p>
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
                <p className="text-gray-600 text-sm">
                  No timer pause. Penalize consecutive skips
                </p>
              </div>
            </div>
            <button></button>
          </div>
        </div>
        <Link
          to={"/questions"}
          className="flex items-center text-gray-700 hover:text-white transition cursor-pointer hover:shadow-[0px_0px_15px_gray] bg-[#7C3AED] p-4 my-4 w-full rounded-2xl font-extrabold justify-center"
        >
          Start Practice <RiArrowRightLine />
        </Link>
      </div>
    </div>
  );
}

export default Setup;
