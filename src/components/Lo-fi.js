import React from 'react';
import { youTube_Front_API } from '../config';
import { youTube_Back_JoinAPI } from '../config';
import { useState,useEffect } from 'react';
import VideoCard from './VideoCard';
import ShimmerEffect from './ShimmerEffect';

const LoFi = () => {
  const[lofiVideo,setLofiVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);

  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"lofi"+youTube_Back_JoinAPI);
    const json = await data?.json();
    setLofiVideo(json?.items);
  }
  if(lofiVideo == null || lofiVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {lofiVideo?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default LoFi;
