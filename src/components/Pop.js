import React, { useEffect, useState } from 'react'
import { youTube_Back_JoinAPI, youTube_Front_API } from '../config';
import VideoCard from './VideoCard';
import ShimmerEffect from './ShimmerEffect';

const Pop = () => {
  const[popVideo,setPopVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);

  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"pop"+youTube_Back_JoinAPI);
    const json = await data?.json();
    setPopVideo(json?.items);
  }
  if(popVideo == null || popVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {popVideo?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default Pop
