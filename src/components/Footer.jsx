import React from 'react'
import {AiFillFacebook,AiFillTwitterSquare} from 'react-icons/ai'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsDiscord, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex bg-slate-900 w-screen flex-col items-center justify-center text-xs mt-5 py-10'>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <p className='text-slate-400 mx-6'>Follow Us</p>
          <div className='flex'>
              <AiFillFacebook className='w-8 h-8 mx-2 cursor-pointer hover:opacity-70'/>
              <AiFillTwitterSquare className='w-8 h-8 mx-2 cursor-pointer hover:opacity-70'/>
              <FaInstagramSquare className='w-8 h-8 mx-2 cursor-pointer hover:opacity-70'/>
              <BsDiscord className='w-8 h-8 mx-2 cursor-pointer hover:opacity-70'/>
          </div>
        </div>
        <div className='flex items-center mx-8'>
          <p className='text-slate-400 mx-6'>Get the App</p>
          <div className='flex'>
              <img className='w-20 hover:opacity-70 cursor-pointer transition-all mx-1' src="	https://cdn.myanimelist.net/images/appli/badge_iOS.png" alt="" />
              <img className='w-20 hover:opacity-70 cursor-pointer transition-all mx-1' src="https://cdn.myanimelist.net/images/appli/badge_googleplay.png" alt="" />
          </div>
        </div>
      </div>
      <hr className='border-b border-slate-600 w-6/12 mt-4' />
      <div className='my-8 flex max-sm:flex-col'>
        <a className='mx-4 hover:border-b' href="">Home</a>
        <a className='mx-4 hover:border-b' href="">|</a>
        <a className='mx-4 hover:border-b' href="">About</a>
        <a className='mx-4 hover:border-b' href="">Press Room</a>
        <a className='mx-4 hover:border-b' href="">Support</a>
        <a className='mx-4 hover:border-b' href="">Advertisin</a>
        <a className='mx-4 hover:border-b' href="">FAQ</a>
        <a className='mx-4 hover:border-b' href="">Terms</a>
        <a className='mx-4 hover:border-b' href="">Privacy</a>
        <a className='mx-4 hover:border-b' href="">Cookie</a>
        <a className='mx-4 hover:border-b' href="">Notice at Collection</a>
        <a className='mx-4 hover:border-b' href="">Sitemap</a>
        <a className='mx-4 hover:border-b' href="">|</a>
        <a className='mx-4 hover:border-b' href="">Login</a>
        <a className='mx-4 hover:border-b' href="">Sign Up</a>
      </div>
      <div className='flex'>
        <p className='text-slate-400 cursor-default'>Recommended</p>
        <div className='flex mx-3'>
          <a className='mx-3 hover:border-b' href="http://otakumode.com/fb/5aO">Tokyo Otaku Mode</a>
          <a className='mx-3 hover:border-b' href="https://www.honeyfeed.fm/">Honeyfeed</a>
          <a className='mx-3 hover:border-b' href="https://myanimelist.net/store?_location=mal_f_m">Manga Store</a>
          <a className='mx-3 hover:border-b' href="https://otsukai.com/">Otsukai</a>
        </div>
      </div>
      <div className='my-7 text-slate-400 flex justify-center flex-col items-center'>
        <p className='text-s'>MyAnimeList.net is a property of MyAnimeList Co.,Ltd. ©2023 All Rights Reserved.</p>
        <p style={{fontSize:'9px'}} className=''>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
      </div>
    </div>
  )
}

export default Footer
