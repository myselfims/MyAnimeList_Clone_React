import React from 'react'
import SignupBanner from '../components/SignupBanner'
import HorizontalCard from '../components/HorizontalCard'
import Carousel from '../components/Carousel'
import CardList from '../components/CardList'

const Home = () => {
  return (
    <div>
        <SignupBanner/>
        <div className='w-full border-b border-slate-700 p-1'>
          <h1 className='font-bold text-xl'>Welcome to ShaikhImran.net!</h1>
        </div>
        <div className="content flex">
          <div className="sec1 border p-2 border-slate-600 w-8/12">
            <div className=''>
              <div className='flex justify-between items-center '>
                <h1 className='font-bold mt-2'>MALxJapan - More than just anime-</h1>
                <a className='hover:border-b mx-2 text-sky-500' href="">Visit MALxJapan</a>
              </div>
              <div className='flex justify-between'>
                <HorizontalCard/>
                <HorizontalCard/>
                <HorizontalCard/>

              </div>
            </div>
            <Carousel card={'vertical'}/>
            <Carousel card={'vertical'}/>
            <Carousel />

          </div>
          <div className="sec2 border border-slate-700 w-full">
            <div>
              <CardList title={'Top Airing Anime'}/>
              <CardList title={'Top Upcoming Anime'}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
