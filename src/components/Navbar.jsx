import React from 'react'
import Dropdown from './Dropdown'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex py-2 items-center px-4 justify-between'>
        <div className="logo">
            <Link to={'/'}>
                <h1 className='text-4xl cursor-pointer font-bold'>Jagnita</h1>
            </Link>
        </div>
        <div>
            <img className='w-64' src="https://myanimelist.net/c/img/images/event/20210527_MALxJAPAN_MiniBanner/500x72_miniBanner_B.png" alt="" />
        </div>
        <div>
            <button className=' text-white p-1 font-bold hover:opacity-60 mr-7 py-0'>Hide ads</button>
            <button className='bg-slate-700 text-white px-4 font-bold hover:opacity-90 mx-2 py-0'>Login</button>
            <button className='bg-sky-700 text-white px-4 font-bold hover:opacity-90 mx-2 py-0'>Signup</button>
        </div>
        </div>

        <div className="bg-sky-700 items-center flex justify-between px-4">
            <div>
                <ul className='flex'>
                    <li className='group text-white hover:bg-slate-700 p-2 cursor-default font-bold link relative'>Anime
                    <Dropdown list={[
                        {text:'Anime Search',link:'/topanime'},
                        {text:'Top Anime',link:'/topanime'},
                        {text:'Seasonal Anime',link:'/topanime'},
                        {text:'Videos',link:'/videos'},
                        {text:'Reviews',link:'/topanime'},
                        {text:'Recommendations',link:'/topanime'},
                        {text:'2023 Challenge',link:'/topanime'},
                        {text:'Fantasy Anime League',link:'/topanime'}
                    ]}/>
                    </li>
                    <li className='group text-white hover:bg-slate-700 p-2 cursor-default font-bold relative'>Manga
                    <Dropdown key={0} list={[
                        {text:'Manga Search',link:''},
                        {text:'Top Manga',link:''},
                        {text:'Manga Store',link:''},
                        {text:'Reviews',link:''},
                        {text:'Recommendations',link:''},
                        {text:'2023 Challenge',link:''}
                    ]}
                    />
                    </li>
                    <li className='group text-white hover:bg-slate-700 p-2 cursor-default font-bold relative'>Community
                    <Dropdown list={[
                        {text:'Interest Stacks',link:''},
                        {text:'Forums',link:''},
                        {text:'Clubs',link:''},
                        {text:'Blogs',link:''},
                        {text:'Users',link:''}
                    ]}
                    />
                    </li>
                    <li className='group text-white hover:bg-slate-700 p-2 cursor-default font-bold relative'>Industry
                    <Dropdown list={[
                        'News',
                        'Featured Articles',
                        'People',
                        'Characters',
                        'Companies',
                        'MALxJapan'

                    ]}
                    />
                    </li>
                    <li className='group text-white hover:bg-slate-700 p-2 cursor-default font-bold relative'>Watch
                    <Dropdown list={[
                        'Episode Videos',
                        'Anime Trailor'
                    ]}
                    />
                    </li>
                    <li className='group text-white hover:bg-slate-700 p-2 cursor-default font-bold relative'>Read
                    <Dropdown list={[
                        'Manga Store'
                    ]}
                    />
                    </li>
                    <li className='group text-white hover:bg-slate-700 p-2 cursor-default font-bold relative'>Help
                    <Dropdown list={[
                        'About',
                        'Support',
                        'Advertising',
                        'FAQ',
                        'Report',
                        'Staff',
                        'MAL Support'

                    ]}

                    />
                    </li>
                </ul>
            </div>
            <div className='flex items-center'>
                <div>
                    <select className='bg-black rounded text-white h-6 mx-1' name="" id="">
                        <option value="">All</option>
                        <option value="">Anime</option>
                        <option value="">Manga</option>
                        <option value="">Characters</option>
                        <option value="">People</option>
                        <option value="">Companies</option>
                        <option value="">Manga Store</option>
                        <option value="">News</option>
                        <option value="">Featured Articles</option>
                        <option value="">Forum</option>
                        <option value="">Clubs</option>
                        <option value="">Users</option>
                    </select>
                </div>
                <div className='rounded flex bg-black overflow-hidden'>
                    <input className='w-60 rounded bg-black p-1 outline-none h-6' placeholder='Search Anime, Manga, and more...' type="text" />
                    <button className='bg-slate-700 font-bold p-1'><AiOutlineSearch/></button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar
