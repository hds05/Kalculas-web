import React from "react";

function Setup() {
  return (
    <div className="text-white p-4">
      <div className="my-4">
        <h1 className="my-4 text-4xl ">Operation</h1>
        <div>
          <ul className="flex gap-2 justify-evenly text-white text-amber-600">
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Addition
            </li>
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Substraction
            </li>
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Multiplication
            </li>
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Division
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="my-4">
        <h1 className="my-4 text-4xl ">Digits</h1>
        <div>
          <ul className="flex gap-2 justify-evenly text-white text-amber-600">
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              One
            </li>
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Two
            </li>
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Three
            </li>
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Division
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <h1 className="my-4 text-4xl ">Questions</h1>
        <div>
          <ul className="flex gap-2 justify-evenly text-white text-amber-600">
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Ten
            </li>
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Twenty
            </li>
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Thrirty
            </li>
            <li className="border-2 border-amber-600 p-4 rounded-4xl hover:text-black hover:bg-amber-600 hover:font-bold cursor-pointer">
              Fifty
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Setup;
