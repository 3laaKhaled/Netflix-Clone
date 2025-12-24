import React from 'react'
import './Footer.css'
import youtubeIcon from '../../assets/youtube_icon.png'
import twitterIcon from '../../assets/twitter_icon.png'
import instagramIcon from '../../assets/instagram_icon.png'
import facebookIcon from '../../assets/facebook_icon.png'

const Footer = () => {
  return (
    <footer className='px-[4%] py-8 max-w-250 mx-auto text-sm text-gray-400'>

      {/* Social Icons */}
      <div className="flex items-center gap-5 mb-8">
        <img src={facebookIcon} alt="facebook" className="w-7 cursor-pointer hover:opacity-80" />
        <img src={instagramIcon} alt="instagram" className="w-7 cursor-pointer hover:opacity-80" />
        <img src={twitterIcon} alt="twitter" className="w-7 cursor-pointer hover:opacity-80" />
        <img src={youtubeIcon} alt="youtube" className="w-7 cursor-pointer hover:opacity-80" />
      </div>

      {/* Divider */}
      <div className='w-full h-px bg-gray-700/60 mb-8'></div>

      {/* Links */}
      <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-4 gap-x-6 mb-8'>
        <li className='cursor-pointer hover:text-white'>Audio Description</li>
        <li className='cursor-pointer hover:text-white'>Help Centre</li>
        <li className='cursor-pointer hover:text-white'>Gift Cards</li>
        <li className='cursor-pointer hover:text-white'>Media Centre</li>
        <li className='cursor-pointer hover:text-white'>Investor Relations</li>
        <li className='cursor-pointer hover:text-white'>Jobs</li>
        <li className='cursor-pointer hover:text-white'>Terms of Use</li>
        <li className='cursor-pointer hover:text-white'>Privacy</li>
        <li className='cursor-pointer hover:text-white'>Legal Notices</li>
        <li className='cursor-pointer hover:text-white'>Cookie Preferences</li>
        <li className='cursor-pointer hover:text-white'>Corporate Information</li>
        <li className='cursor-pointer hover:text-white'>Contact Us</li>
      </ul>

      {/* Copyright */}
      <p className='text-xs text-gray-500'>© 1997-2026 Netflix, Inc.</p>
    </footer>
  )
}

export default Footer