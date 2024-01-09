import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ButtonCarousel = () => {
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false); 
    const scrl = useRef(0);
    useEffect(() => {
    //Check width of the scollings
        if (
        scrl.current &&
        scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
        ) {
        setscrolEnd(true);
        } else {
        setscrolEnd(false);
        }
        return () => {};
    }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);
    const handleChange = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift); // Updates the latest scrolled postion
        if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    }
    const scrollCheck = () => {
        setscrollX(scrl.current.scrollLeft);
        if (
        Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
        scrl.current.offsetWidth
        ) {
        setscrolEnd(true);
        } else {
        setscrolEnd(false);
        }
    };

    return (
        <div className="relative max-w-6xl ml-5 -mt-3 border border-white bg-white rounded-md">
            {scrollX !== 0 && <div className="absolute h-full w-24 top-0 flex items-center pt-0 pb-0 pl-2 pr-2 bg-gradient-to-r from-white from-50% to-transparent">
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} onClick = {() => handleChange(-50)} stroke="currentColor" className="ml-2 w-6 h-6 cursor-pointer hover:bg-neutral-300 rounded-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </div>}
            <ul ref={scrl} onScroll={scrollCheck} className="flex space-x-4 m-0 pt-1 pb-1 pl-6 pr-6 overflow-x-scroll no-scrollbar scroll-smooth">
                <li className="">
                    <a className="bg-black text-white pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap" href="/#">All</a>
                </li>
                <li>
                    <Link to="/Live" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300" href="/#">Live</Link>
                </li>
                <li>
                    <Link to="/Music" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Music</Link>
                </li>
                <li>
                    <Link to="/Sports" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Sports</Link>
                </li>
                <li>
                    <Link to="/Pop" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Pop</Link>
                </li>
                <li>
                    <Link to="/Lo-fi" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Lo-fi</Link>
                </li>
                <li>
                    <Link to="/INDIA" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">INDIA</Link>
                </li>
                <li>
                    <Link to="/Mixes" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Mixes</Link>
                </li>
                <li>
                    <Link to="/Gaming" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Gaming</Link>
                </li>
                <li>
                    <Link to="/T-Series" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">T-Series</Link>
                </li>
                <li>
                    <Link to="/Hip-Hop" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Hip-Hop</Link>
                </li>
                <li>
                    <Link to="/Career" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Career</Link>
                </li>
                <li>
                    <Link to="/Engineering" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Engineering</Link>
                </li>
                <li>
                    <Link to="/Sales" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Sales</Link>
                </li>
                <li>
                    <Link to="/News" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">News</Link>
                </li>
                <li>
                    <Link to="/RecentlyWatched" className="bg-gray-200 pt-1 pb-1 pl-4 pr-4 inline-block rounded-md select-none whitespace-nowrap hover:bg-gray-300">Recently watched</Link>
                </li>
            </ul>
            {!scrolEnd && <div className="absolute h-full w-24 top-0 items-center flex right-0 justify-end pt-0 pb-0 pl-2 pr-2 bg-gradient-to-l from-white from-50% to-transparent">
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="conatiner" onClick = {() => handleChange(+50)} strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer hover:bg-neutral-300 rounded-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>}
        </div>
    );
}

export default ButtonCarousel;