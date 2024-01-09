import React, { useEffect, useState } from 'react'
import { youTube_Back_JoinAPI, youTube_Front_API } from '../config';
import VideoCard from './VideoCard';
import ShimmerEffect from './ShimmerEffect';

const RecentlyWatched = () => {
  const[recentlyWatchedVideo,setRecentlyWatchedVideo] = useState([]);

  useEffect(() => {
    fetchData();
  } ,[]);

  const fetchData = async () => {
    const data = await fetch(youTube_Front_API+"recently watched music and sports"+youTube_Back_JoinAPI);
    const json = await data?.json();
    setRecentlyWatchedVideo(json?.items);
  }
  if(recentlyWatchedVideo == null || recentlyWatchedVideo.length === 0){
    return <ShimmerEffect />
  }
  return (
    <div className='mt-20 flex flex-wrap'>
      {recentlyWatchedVideo?.map((video) => (
        <VideoCard key={video?.id?.videoId} info={video} /> 
      ))}  
    </div>
  )
}

export default RecentlyWatched
