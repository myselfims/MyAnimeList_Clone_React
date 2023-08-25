import React from 'react'

const ListingCard = ({index}) => {
  return (
    <div className='flex text-xs my-6'>
            <div>
                <h1 className='font-bold text-xl'>{index+1}</h1>
            </div>
            <div className='flex'>
                <div>
                    <img className='w-12 mx-3 h-20' src="https://i.pinimg.com/750x/5e/8d/fc/5e8dfc7210d98ff44bd04a2804875562.jpg" alt="" />
                </div>
                <div className='mx-3'>
                    <h1 className='font-bold'>Shingeki no Kyojin: The Final Season - Kanketsu-hen</h1>
                    <p>Special, 2 eps, scored 9.03
469,046 members</p>
                </div>
                <button className='text-sky-400 bg-slate-600 transition-all hover:opacity-70 h-fit'>add</button>
            </div>

        </div>
  )
}

export default ListingCard
