import React from "react";

function Footer() {
  return (
    <div className="mt-8 border-t border-gray-300/20 p-4 text-[10px] flex justify-between">
      <div>
        <p>KALCULAS MENTAL PERFORMANCE, 2026</p>
      </div>
      <div className="flex gap-2.5">
        <button className="cursor-pointer">METHODOLOGY</button>
        <button className="cursor-pointer">SHORTCUTS</button>
        <button className="cursor-pointer">PRIVACY</button>
      </div>
    </div>
  );
}

export default Footer;
