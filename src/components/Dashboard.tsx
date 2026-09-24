import React from "react";

function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly gap-4">
      <div className="p-4 text-amber-400 font-mono border rounded-4xl w-[300px] text-center cursor-pointer transition transform hover:scale-105 bg-black hover:z-50 hover:shadow-[0px_0px_6px_purple] hover:text-white">
        Mental Math
      </div>
      <div className="p-4 text-amber-400 font-mono border rounded-4xl w-[300px] text-center cursor-pointer transition transform hover:scale-105 bg-black hover:z-50 hover:shadow-[0px_0px_6px_purple] hover:text-white">
        Train your Calculation Speed.
      </div>
    </div>
  );
}

export default Dashboard;
