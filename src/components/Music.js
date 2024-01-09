import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { youTube_Front_API } from '../config';
import { youTube_Back_JoinAPI } from '../config';
import ShimmerEffect from './ShimmerEffect';

const Music = () => {
  const[musicVideo,setMusicVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);

  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"music"+youTube_Back_JoinAPI);
    const json = await data?.json();
    setMusicVideo(json?.items);
  }
  if(musicVideo == null || musicVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {musicVideo?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default Music
