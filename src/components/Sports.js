import React, { useEffect, useState } from 'react'
import { youTube_Back_JoinAPI, youTube_Front_API } from '../config';
import ShimmerEffect from './ShimmerEffect';
import VideoCard from './VideoCard';

const Sports = () => {
  const[sportsVideo,setSportsVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);
  
  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"sports"+youTube_Back_JoinAPI);
    const json = await data?.json();
    setSportsVideo(json?.items);
  }
  if(sportsVideo == null || sportsVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {sportsVideo?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default Sports
