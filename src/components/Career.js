import React, { useEffect, useState } from 'react'
import { youTube_Back_JoinAPI, youTube_Front_API } from '../config';
import VideoCard from './VideoCard';
import ShimmerEffect from './ShimmerEffect';

const Career = () => {
  const[careerVideo,setCareerVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);

  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"career"+youTube_Back_JoinAPI);
    const json = await data?.json();
    setCareerVideo(json?.items);
  }
  if(careerVideo == null || careerVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {careerVideo?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default Career
