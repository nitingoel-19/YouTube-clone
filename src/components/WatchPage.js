import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/storeSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    
    const [params] = useSearchParams();
    console.log(params.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(closeMenu());
    },)
    
    return (
      <div className='mt-24 ml-7'>
        <div>
          <iframe width="990" height="500" src={"https://www.youtube.com/embed/"+params.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    )
}

export default WatchPage
