import React from 'react'
import { PaperAirplaneIcon, SearchIcon, MenuIcon, UserIcon } from "@heroicons/react/outline";

const Home = () => {
  return (
    <div className='bg-white'>
      <header className='p-4 flex justify-between'>
        <a href="" className='logo flex items-center gap 2'>
          <PaperAirplaneIcon className="w-10 h-10" />
          <span className='text-xl font-bold'>AirBnb</span>
        </a>
        <div className="flex border border-gray-500 rounded-full py-2 px-4 gap-3 shadow-md">
          <div>Anywhere</div>
          <div className="border-l border-gray-500"></div>
          <div>Week</div>
          <div className="border-l border-gray-500"></div>
          <div>Guests</div>
          <button className='bg-search_icon text-white rounded-full p-1'>
            <SearchIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-2 border border-gray-900 rounded-full px-4 py-1 items-center">
          <div className=""><MenuIcon className='h-4 w-4 mr-2' /></div>
          <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden"><UserIcon className='h-5 w-5 relative top-1' /></div>
        </div>
      </header>
    
    </div>
  )
}

export default Home
