import React, { useEffect, useState } from 'react'
import { youTube_Back_JoinAPI, youTube_Front_API } from '../config';
import VideoCard from './VideoCard';
import ShimmerEffect from './ShimmerEffect';

const Sales = () => {
  const[salesVideo,setSalesVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);
  
  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"sales"+youTube_Back_JoinAPI);
    const json = await data?.json();
    setSalesVideo(json?.items);
  }
  if(salesVideo == null || salesVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {salesVideo?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default Sales
