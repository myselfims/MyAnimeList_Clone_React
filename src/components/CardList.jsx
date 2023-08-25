import React from 'react'
import ListingCard from './ListingCard'

const CardList = ({title}) => {

  const loop = (range)=>{
    let arr = []
    for (let i=0;i<range;i++){
        arr.push(i)
    }
    return arr;
  }

  return (
    <div className='flex flex-col p-4'>
      <div className='flex justify-between p-1 rounded bg-slate-600 '>
        <h1 className='font-bold'>{title}</h1>
        <button className='text-sky-500 hover:border-b font-bold'>More</button>
      </div>
      <div>
        {loop(5).map((item)=>{
          return <ListingCard key={item} index={item}/>
        })}
      </div>
    </div>
  )
}

export default CardList
