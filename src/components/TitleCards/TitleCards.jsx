import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'

const TitleCards = ({title , category}) => {

  const [ apiData , setApiData ] = useState([])

  const cardsRef = useRef()
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2M4YzE2MjBkYjYyMmE3ZTA1NGMyNTNhMGMzNWY0YSIsIm5iZiI6MTc2NjMxNjg5NC41ODQsInN1YiI6IjY5NDdkYjVlM2E5YjBlODM3NDA3MmZmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6E6chVSBqgMPa_ZVEfGIym2EbHc4XcQsnTn06xZO_tw'
    }
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results || []))
    .catch(err => console.error(err));
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleMouseDown = (e) => {
    isDown.current = true
    cardsRef.current.classList.add('dragging')
    startX.current = e.pageX - cardsRef.current.offsetLeft
    scrollLeft.current = cardsRef.current.scrollLeft
  }

  const handleMouseLeave = () => {
    isDown.current = false
    cardsRef.current.classList.remove('dragging')
  }

  const handleMouseUp = () => {
    isDown.current = false
    cardsRef.current.classList.remove('dragging')
  }

  const handleMouseMove = (e) => {
    if (!isDown.current) return
    e.preventDefault()
    const x = e.pageX - cardsRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    cardsRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className="mt-12 mb-8">
      <h2 className='mb-2 text-lg font-medium text-white'>
        {title ? title : "Popular on Netflix"}
      </h2>

      <div ref={cardsRef} 
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className='flex gap-3 overflow-x-auto overflow-y-hidden scrollbar-hide pb-2 cursor-grab active:cursor-grabbing'
      >
        {
          apiData.map((card) => (
            <Link to={`/player/${card.id}`} className='relative shrink-0 group' key={card.id}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.original_title} className='w-45 sm:w-50 md:w-60 rounded cursor-pointer transition-transform duration-300 group-hover:scale-105'/>
              <p className='absolute bottom-0 left-0 w-full text-sm text-white bg-black/60 px-2 py-1 rounded-t line-clamp-1 overflow-hidden text-ellipsis transition-opacity duration-300 opacity-0 group-hover:opacity-100'>{card.original_title}</p>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default TitleCards