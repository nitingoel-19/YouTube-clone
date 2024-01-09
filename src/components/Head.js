import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/storeSlice';
import { youTube_Search_API } from '../config';
import { memoizationText } from '../utils/searchSlice';
import settings from "../assets/settings.png";

export let isOkay = false;
const Head = () => {
  const[searchText,setSearchText] = useState("");
  const[searchMap,setSearchMap] = useState([]);
  const[showSuggestions,setShowSuggestions] = useState(false);

  isOkay = showSuggestions;

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();


  useEffect(() => {

    const timer = setTimeout(() => {
      if(searchCache[searchText]){
        setSearchMap(searchCache[searchText]);
      }
      else{
        fetchSearchSuggestions();
      }
    },200)

    return () => {
      clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchText])

  const fetchSearchSuggestions = async () => {
      const data = await fetch(youTube_Search_API+searchText);
      const json = await data.json();
      setSearchMap(json[1]);

      // update memoization dp
        dispatch(
          memoizationText({
            [searchText]: json[1],
          })
        );
  }
  
  const handelClose = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='grid grid-flow-col w-full fixed bg-white'>
      <div className='flex p-2 ml-2 col-span-1 bg-white'>
        <img className="h-10 m-1 hover:bg-gray-200 hover:border-gray-900 hover:rounded-full w-7 mt-3 cursor-pointer " alt="sidebar" src="https://cdn3.iconfinder.com/data/icons/utility-icons/50/Hamburger_Menu-512.png" onClick={handelClose}/>
        <img className='h-16 w-32 ml-4' alt="logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" />
      </div>
        <div className='mt-5 col-span-10 text-center bg-white'>
          <div>
            <input className="w-1/2 p-2 rounded-l-full border border-solid border-gray-400 px-5" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="p-2 border border-solid border-gray-400 bg-gray-200 rounded-r-full" type="submit">Search</button>
          </div>  
          {showSuggestions && (<div className='fixed -mt-0 ml-56 bg-white py-2 px-5 w-[31rem] shadow-lg rounded-xl'>
            <ul className='px-5 py-2'>
              {searchMap.map((s) => (
                <li key={s} className='py-2 px-3 w-fit hover:bg-gray-100'>{s}</li>
              ))}
            </ul>
          </div>
          )}
        </div>
      <div className='col-span-1'>
        <a href="/#"><img className = "float-left h-6 mt-6 -px-7" alt="settings" src={settings} /></a>
        <a href="/#"><img className='float-left h-14 mt-2' alt="profile" src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" /></a>
      </div>
    </div>
  )
}

export default Head;
