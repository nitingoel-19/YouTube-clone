import React, { useEffect, useState } from 'react'
import { youTube_Back_JoinAPI, youTube_Front_API } from '../config';
import ShimmerEffect from './ShimmerEffect';
import VideoCard from './VideoCard';

const TSeries = () => {
  const[TSeriesVideo,setTSeriesVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);
  
  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"T-series"+youTube_Back_JoinAPI);
    const json = await data?.json();
    setTSeriesVideo(json?.items);
  }
  if(TSeriesVideo == null || TSeriesVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {TSeriesVideo?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default TSeries;
