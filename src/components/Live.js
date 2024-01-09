import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { youTube_live } from '../config';
import ShimmerEffect from './ShimmerEffect';

const Live = () => {
  const[liveVideo,setLiveVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);

  const fetchData = async () => {
    const data = await fetch(youTube_live);
    const json = await data?.json();
    console.log(json);
    setLiveVideo(json?.items);
  }
  if(liveVideo == null || liveVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {
        liveVideo?.map((video) => (
          <VideoCard key = {video?.id?.videoId} info={video} location={"Live"}/>
        ))
      }
    </div>
  )
}

export default Live
