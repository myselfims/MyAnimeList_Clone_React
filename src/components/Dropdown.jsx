import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({list}) => {
  return (
    <div className='bg-slate-700 z-10 group-hover:flex hidden link-hover:flex absolute left-0 w-fit'>
      <ul>
        {list?.map((item)=>{
            return (
                <Link key={item.text} to={item.link}>
                  <li key={item.text} className='hover:bg-white cursor-pointer p-2 hover:text-black font-normal'>{item.text}</li>
                </Link>
            )
        })}
        
      </ul>
    </div>
  )
}

export default Dropdown
