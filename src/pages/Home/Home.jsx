import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import playIcon from "../../assets/play_icon.png"
import infoIcon from "../../assets/info_icon.png"
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />


      <div className="relative">

        {/* Banner */}
        <img src={heroBanner} alt="hero Banner" className='w-full' style={{
          maskImage: 'linear-gradient(to right, transparent, black 75%)' ,
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 75%)'
        }} />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 w-full px-[6%] pb-12 text-white">
          <img src={heroTitle} alt="hero Title" className='w-[90%] max-w-105 mb-6' />
          <p className='max-w-175 text-sm sm:text-base md:text-[17px] mb-5'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>

          {/* Buttons */}
          <div className="flex gap-2 mb-12">
            <button className='flex items-center gap-2 px-5 py-2 text-[15px] font-semibold rounded bg-white text-black hover:bg-white/80 transition duration-300'>
              <img src={playIcon} alt="play icon" className="w-6"/>
              Play
            </button>
            <button className='flex items-center gap-2 px-5 py-2 text-[15px] font-semibold rounded bg-white/30 hover:bg-white/20 transition duration-300'>
              <img src={infoIcon} alt="info icon" className="w-6"/>
              More Info
            </button>
          </div>

          {/* TitleCards inside Hero */}
          <TitleCards />
        </div>
      </div>

      {/* Home Layout */}
      <div className="pl-[6%]">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>

      <Footer />
    </div>
  )
}

export default Home