import React from 'react'
import { useSelector } from 'react-redux';
import ShrinkSideBar from './shrinkSideBar';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isOpenSideBar = useSelector((store) => store.sidebar.isOpenSideBar);
  if(!isOpenSideBar){
    return <ShrinkSideBar />
  }
  return (
    <div className='p-5 w-60'>
      <ul className="mt-16">
        <Link to="/"><li className='p-2 border border-gray-300 bg-neutral-100 px-5 w-48 h-10 rounded-xl font-semibold text-sm'>☗&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home</li></Link>
        <Link to="/"><li className='p-2 px-5 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>⌺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shorts</li></Link>
        <Link to="/"><li className='p-2 px-3 mb-3 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>⨭⨮&nbsp;&nbsp;&nbsp;&nbsp;Subscriptions</li></Link>
      </ul>
      <hr />
      <ul className="">
        <Link to="/"><li className='mt-3 p-2 px-3 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>👤&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You</li></Link>
        <Link to="/"><li className='mb-3 p-2 px-3 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>♻︎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;History</li></Link>
      </ul>
      <hr />
      <ul className="">
        <p className='mt-3 text-center text-sm font-medium'>Sign in to like videos, comment and subscribe.</p>
        <Link to=""><li className='flex justify-center ml-4 mt-3 mb-4 border border-blue-100 rounded-full h-10 items-center w-24 text-blue-600 text-sm font-bold hover:bg-blue-100'>Sign in</li></Link>
      </ul>
      <hr />
      <ul className="">
        <h1 className='mt-3'><strong>Explore</strong></h1>
        <Link to=""><li className='mt-1 p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>🔥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trending</li></Link>
        <Link to=""><Link to=""></Link><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>🛍️&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shopping</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>♫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Music</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>🎬&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Films</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>⦑ ⦒&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Live</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>🎮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gaming</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>📰&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;News</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>🏆&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sport</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>💡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Learning</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>⾐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fashion & beauty</li></Link>
        <Link to=""><li className='mb-3 p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>📍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Podcasts</li></Link>
      </ul>
      <hr />
      <ul className="">
        <Link to=""><li className='mt-3 mb-3 p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Browse Channels</li></Link>
      </ul>
      <hr />
      <ul className="">
        <h1 className='mt-3'><strong>More from YouTube</strong></h1>
        <Link to=""><li className='mt-1 p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>䷛&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YouTube Premium</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>🎹&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YouTube Music</li></Link>
        <Link to=""><li className='mb-3 p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>🐱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;YouTube Kids</li></Link>
      </ul>
      <hr />
      <ul className="">
        <Link to=""><li className='mt-3 p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>⛭&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settings</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>⛬&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Report History</li></Link>
        <Link to=""><li className='p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>🉁&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Help</li></Link>
        <Link to=""><li className='mb-3 p-2 px-2 hover:border border-gray-300 hover:bg-neutral-100 w-48 h-10 rounded-xl'>🔙&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Send feedback</li></Link>
      </ul>
    </div>
  )
}

export default SideBar;
