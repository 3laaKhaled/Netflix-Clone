import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from "../../assets/bell_icon.svg"
import profileImg from "../../assets/profile_img.png"
import caretIcon from "../../assets/caret_icon.svg"
import { logout } from '../../firebase/firebase'

const Navbar = () => {

  const [ isScrolled , setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 80)
    }
    window.addEventListener("scroll" , handleScroll)
    return () => window.removeEventListener("scroll" , handleScroll)
  },[])

  return (
    <>
    <div className={`fixed top-0 w-full z-50 px-[6%] py-5 flex items-center justify-between text-sm text-[#e5e5e5] transition-colors duration-300 
    ${isScrolled ? 'bg-[#141414]' : 'bg-linear-to-b from-black/70 to-transparent'}`}>

      {/* Left */}
      <div className="flex items-center gap-8">
        <img src={logo} alt="logo" className='w-22.5'/>
        <ul className='hidden lg:flex items-center gap-5'>
          <li className='cursor-pointer hover:text-white'>Home</li>
          <li className='cursor-pointer hover:text-white'>TV Shows</li>
          <li className='cursor-pointer hover:text-white'>Movies</li>
          <li className='cursor-pointer hover:text-white'>New & Popular</li>
          <li className='cursor-pointer hover:text-white'>My List</li>
          <li className='cursor-pointer hover:text-white'>Browse by Languages</li>
        </ul>
      </div>

      {/* Right */}
      <div className='flex items-center gap-5'>
        <img src={searchIcon} alt="search" className='w-5 cursor-pointer' />
        <p className='hidden sm:block'>Children</p>
        <img src={bellIcon} alt="bell" className='w-5 cursor-pointer' />

        {/* Profile */}
        <div className="relative group flex items-center gap-2 cursor-pointer">
          <img src={profileImg} alt="profile" className='w-8.75 rounded' />
          <img src={caretIcon} alt="caret" />

          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 bg-[#191919] px-5 py-4 rounded underline text-[13px] whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
            <p onClick={logout} className="cursor-pointer">Sign Out of Netflix</p>
          </div>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(true)} className='lg:hidden text-xl'>
          ☰
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div className={`fixed top-0 right-0 h-screen w-64 bg-[#141414] z-40 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden p-6`}>
      <button onClick={() => setMenuOpen(false)} className='mb-6 z-10 text-xl'>
        ✕
      </button>
        <ul className="flex flex-col gap-4">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
    </div>
    </>
  )
}

export default Navbar