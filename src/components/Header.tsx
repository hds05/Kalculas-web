import React, { useState } from "react";
import { PiFireBold } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  function openMenu() {
    setOpen((prev) => !prev);
  }
  const location = useLocation();
  const practiceActive =
    location.pathname === "/practiceSetup" ||
    location.pathname === "/questions";
  return (
    <div className=" flex justify-between items-center bg-black p-4 rounded-[0_0_20px_20px]">
      {/* <h1 className="text-white font-extrabold">Kalculas</h1> */}
      {/* <img src="./logo-1.png" width={"90px"} className="rounded" alt="" /> */}
      <Link to={"/"} className="my-1 flex items-center gap-4">
        <img src="kalculas_icon_logo.png" width={"40px"} alt="" />
        <h1 className="text-white text-xl font-mono">Kalculas</h1>
      </Link>
      <div className="md:block hidden text-white flex gap-3 bg-[#16161D] rounded p-2 justify-between">
        <Link
          to={"/practiceSetup"}
          className={`${practiceActive?"bg-gray-400/30": ""} hover:bg-gray-400/30 cursor-pointer p-1 rounded text-sm`}
        >
          Practice
        </Link>
        <button className="hover:bg-gray-400/30 cursor-pointer p-1 rounded text-sm">
          Progress
        </button>
        <button className="hover:bg-gray-400/30 cursor-pointer p-1 rounded text-sm">
          Setting
        </button>
      </div>
      <div className="relative flex gap-3">
        <div className="text-kal-gold text-xs flex items-center justify-center gap-2 bg-kal-gold-light/20 border rounded-4xl px-2">
          <PiFireBold />
          STREAK
        </div>
        <div
          onClick={() => openMenu()}
          className="text-white cursor-pointer rounded-full overflow-hidden"
        >
          <img src="/Profile_image.png" width={"30px"} alt="" />
        </div>
        {open && (
          <div className="absolute top-15 right-2 bg-violet-950 text-white w-[200px] p-4 rounded-2xl">
            <div className="flex flex-col gap-4 text-center">
              <Link
                to={"/"}
                className="hover:bg-violet-500 p-2 rounded-2xl transition hover:shadow-[0px_0px_10px_black] cursor-pointer hover:scale-105 w-full"
              >
                Dashboard
              </Link>
              <Link
                to={"/"}
                className="hover:bg-violet-500 p-2 rounded-2xl transition hover:shadow-[0px_0px_10px_black] cursor-pointer hover:scale-105 "
              >
                Progress
              </Link>
              <Link
                to={"/"}
                className="hover:bg-violet-500 p-2 rounded-2xl transition hover:shadow-[0px_0px_10px_black] cursor-pointer hover:scale-105 "
              >
                Setting
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
