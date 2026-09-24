import React, { useState } from "react";
import { PiFireBold } from "react-icons/pi";

function Header() {
  const [open, setOpen] = useState(false);
  function openMenu() {
    setOpen((prev) => !prev);
  }
  return (
    <div className=" flex justify-between items-center bg-black p-4 rounded-[0_0_20px_20px]">
      {/* <h1 className="text-white font-extrabold">Kalculas</h1> */}
      {/* <img src="./logo-1.png" width={"90px"} className="rounded" alt="" /> */}
      <div className="my-1 flex items-center gap-4">
        <img src="kalculas_icon_logo.png" width={"40px"} alt="" />
        <h1 className="text-white text-xl font-mono">Kalculas</h1>
      </div>
      <div className="text-white flex gap-3 bg-[#16161D] rounded-3xl p-2 justify-between">
        <button className="hover:bg-gray-400/30 cursor-pointer p-1 rounded text-sm">Practice</button>
        <button className="hover:bg-gray-400/30 cursor-pointer p-1 rounded text-sm">Progress</button>
        <button className="hover:bg-gray-400/30 cursor-pointer p-1 rounded text-sm">Setting</button>
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
          <img src="/Profile_image.png" width={'30px'} alt="" />
        </div>
        {open && (
          <div className="absolute top-15 right-2 bg-white text-black p-4 rounded-2xl">
            <ul>
              <li>Home</li>
              <li>Dashboard</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
