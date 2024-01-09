import React from 'react'
import ButtonCarousel from './ButtonCarousel';
import DisplayVideoUI from './DisplayVideoUI';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isOpenSideBar = useSelector((store) => store.sidebar.isOpenSideBar);
  return (
    <div className='mt-20 p-3 m-3'>
      {!isOpenSideBar ? (
        <>
        <div className='-ml-10 fixed'>
          <ButtonCarousel />
        </div>
        <div className='mt-14 -ml-4'>
          <DisplayVideoUI />
        </div>
      </>
       )
      : (
        <>
          <div className='-ml-4 fixed'>
            <ButtonCarousel />
          </div> 
          <div className='mt-14 ml-3'>
            <DisplayVideoUI />
          </div>
        </>
      )}
    </div>
  )
}

export default MainContainer;
