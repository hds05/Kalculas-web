import { BiTachometer } from "react-icons/bi";



function ArenaIgnition() {
  return (
    <div className="p-6 flex justify-center">
      <div className="w-11/12 p-8 bg-[radial-gradient(circle_at_75%_45%,rgba(88,28,135,0.35)_0%,rgba(49,16,78,0.20)_35%,rgba(9,9,11,0)_70%),linear-gradient(to_right,#09090b,#1a1028,#09090b)] rounded-2xl flex flex-col gap-6 shadow-[0px_0px_2px_violet]">
        <h2 className="text-kal-gold text-[10px] font-bold font-mono">ARENA IGNITION</h2>
        <h1 className="text-3xl font-bold my-4 ">
          Ready to recalibrate your calculation ceiling?
        </h1>
        <p>
          No sign up required for baseline assessment. Jump direclty into a
          calibrated 60-second diagnostic sprint.
        </p>
        <div>
          <button className="cursor-pointer rounded-2xl transition hover:scale-105 hover:shadow-[0px_1px_50px_purple] px-6 py-4 bg-kal-purple flex justify-center items-center gap-4 text-purple-100 font-bold font-mono">Launch Quick Sprint <BiTachometer /></button>
        </div>
      </div>
    </div>
  );
}
export default ArenaIgnition;
