import React, { useEffect, useState } from 'react';
import { youTube_Video_API } from '../config';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerEffect from './ShimmerEffect';

const DisplayVideoUI = () => {
    const[videos , setVideos] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(youTube_Video_API);
        const json = await data?.json();
        setVideos(json?.items);
    };
    if(videos === null || videos?.length === 0){
        return <ShimmerEffect />;
    }
    return (
        <div className='mt-8 flex flex-wrap'>
            {videos?.map((video) => (
               <Link to={"/watch?v="+video?.id} key={video?.id}>
                    <VideoCard key={video?.id} info={video}/>
                </Link>
            ))}
        </div>
    )
}

export default DisplayVideoUI
