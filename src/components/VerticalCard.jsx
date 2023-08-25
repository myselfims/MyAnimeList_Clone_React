import React from 'react'

const VerticalCard = () => {
  return (
    <div className='min-w-fit relative w-40 m-1 h-70 cursor-pointer' >
      <div className="poster">
        <img className='w-40 h-64 hover:opacity-90' src="https://i.pinimg.com/750x/5e/8d/fc/5e8dfc7210d98ff44bd04a2804875562.jpg" alt="" />
      </div>
      <div className="matter text-black bg-slate-300 p-1 absolute bottom-0 w-40">
        <h1 className='text-xs '>Learn how to draw anime & manga from Japanese pros</h1>
      </div>
    </div>
  )
}

export default VerticalCard
