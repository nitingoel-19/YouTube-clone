import React from 'react'

const VideoCard = ({ info , location }) => {
  
  return (
    <div className='p-2 m-2 w-64 shadow-sm'>
      <img className="rounded-lg" alt="thumbnail" src={info?.snippet?.thumbnails.medium.url}/>
      <ul>
        <li className='font-bold py-2'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{(info?.statistics === undefined ? (1*Math.random()) : info?.statistics?.viewCount/1000000).toFixed(1)}M views</li>
        {location === "Live" ? <li className='text-red-700 font-bold border border-red-700 w-fit mt-1'>Live</li> : ""}
      </ul>
    </div>
  )
}

export default VideoCard;
