import React, { useEffect, useState } from 'react'
import { youTube_Back_JoinAPI, youTube_Front_API } from '../config';
import VideoCard from './VideoCard';
import ShimmerEffect from './ShimmerEffect';

const INDIA = () => {
  const[desh,setDesh] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);

  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"INDIA"+youTube_Back_JoinAPI);
    const json = await data?.json();
    console.log(json);
    setDesh(json?.items);
  }
  if(desh == null || desh.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {desh?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default INDIA;
