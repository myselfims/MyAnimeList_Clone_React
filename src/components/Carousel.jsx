import React, { useRef } from 'react'
import HorizontalCard from './HorizontalCard'
import VerticalCard from './VerticalCard'
import {AiOutlineDoubleLeft,AiOutlineDoubleRight} from 'react-icons/ai'

const Carousel = ({card}) => {
    const carousel = useRef()

    const scroll = (direction)=>{
        let object = carousel.current
        let amount = direction === 'left'? object.scrollLeft - (object.offsetWidth+10)
        : 
        object.scrollLeft + (object.offsetWidth+10)
    
        object.scrollTo(
          amount,0
        )
    
      }
  return (
    <div className='group my-4 w-full relative'>
        <div>
            <h1 className='font-bold'>Summer 2023 Anime</h1>
        </div>
        <div ref={carousel}  className='overflow-x-auto flex no-scrollbar justify-between scroll-smooth'>
            {card=='vertical'?
            <>
            <VerticalCard/>
            <VerticalCard/>
            <VerticalCard/>
            <VerticalCard/>
            <VerticalCard/>
            <VerticalCard/>
            <VerticalCard/>
            </>
            :
            <>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            <HorizontalCard/>
            </>
            }
        </div>
        <div className='absolute h-0 w-full flex justify-between top-20 transition-all opacity-0 group-hover:opacity-100'>
            <button className='rounded-full opacity-70 bg-black flex justify-center items-center text-white w-16 h-16' onClick={()=>scroll('left')}><AiOutlineDoubleLeft className='w-5 h-5'/></button>
            <button className='rounded-full opacity-70 bg-black flex justify-center items-center text-white w-16 h-16' onClick={()=>scroll('right')}><AiOutlineDoubleRight className='w-5 h-5'/></button>
        </div>
    </div>
  )
}

export default Carousel
