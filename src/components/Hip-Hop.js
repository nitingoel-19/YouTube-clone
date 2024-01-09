import React, { useEffect, useState } from 'react'
import { youTube_Back_JoinAPI, youTube_Front_API } from '../config';
import VideoCard from './VideoCard';
import ShimmerEffect from './ShimmerEffect';

const HipHop = () => {
  const[hipHopVideo,setHipHopVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);

  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"HipHop"+youTube_Back_JoinAPI);
    const json = await data?.json();
    setHipHopVideo(json?.items);
  }
  if(hipHopVideo == null || hipHopVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {hipHopVideo?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default HipHop
