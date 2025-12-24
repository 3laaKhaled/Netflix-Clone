import React, { useEffect, useState } from 'react'
import './Player.css'
import backArrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()
  
  const navigate = useNavigate()
  
  const [apiData , setApiData] = useState(null)
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1M2M4YzE2MjBkYjYyMmE3ZTA1NGMyNTNhMGMzNWY0YSIsIm5iZiI6MTc2NjMxNjg5NC41ODQsInN1YiI6IjY5NDdkYjVlM2E5YjBlODM3NDA3MmZmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6E6chVSBqgMPa_ZVEfGIym2EbHc4XcQsnTn06xZO_tw'
    }
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0])
        }
      })
    .catch(err => console.error(err))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  return (
    <div className='h-screen flex flex-col items-center justify-center relative bg-black text-white'>

      {/* Back Button */}
      <img src={backArrow} alt="back arrow" onClick={() => navigate('/')} className='absolute top-5 left-5 w-12 cursor-pointer hover:scale-110 transition'/>
      

      {/* Video */}
      {apiData?.key && (
        <iframe
          className="w-[90%] h-[50%] md:h-[70%] rounded-xl mb-4"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        />
      )}

      {/* Info */}
      {apiData && (
        <div className="w-[90%] flex flex-col sm:flex-row justify-between text-sm text-gray-300">
          <p>{apiData.published_at?.slice(0, 10)}</p>
          <p className="truncate max-w-75">{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      )}

    </div>
  )
}

export default Player