import React from 'react'

const HorizontalCard = () => {
  return (
    <div className='min-w-fit w-60 m-1 cursor-pointer' >
      <div className="poster">
        <img className='w-60 hover:opacity-75 transition-all h-32' src="https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg" alt="" />
      </div>
      <div className="matter w-60">
        <h1 className='font-bold'>Learn how to draw anime & manga from Japanese pros</h1>
      </div>
    </div>
  )
}

export default HorizontalCard
