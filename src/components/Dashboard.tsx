import React from 'react'

function Dashboard() {
  return (
    <div className='flex justify-evenly gap-4'>
        <div className='p-4 text-amber-700 font-mono border rounded-4xl w-[300px] text-center cursor-pointer transition transform hover:scale-115 bg-black hover:z-50 hover:shadow-[1px_2px_6px_white]'>Mental Math</div>
        <div className='p-4 text-amber-700 font-mono border rounded-4xl w-[300px] text-center cursor-pointer transition transform hover:scale-115 bg-black hover:z-50 hover:shadow-[1px_2px_6px_white]'>Train your Calculation Speed.</div>
    </div>
  )
}

export default Dashboard