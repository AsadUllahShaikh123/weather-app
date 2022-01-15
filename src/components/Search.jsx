import React from 'react'
const Search = () => {
  return (
    <div className='bg-gradient-to-r from-black to-gray-700  h-screen overflow-y-hidden'>
      <div className='p-6 h-full'>
        <button className='bg-gray-500 text-white  p-2 rounded-lg'>Search For Places</button>
        <div className='flex justify-center items-center h-3/4'>
          <div className='flex flex-col justify-around items-center h-2/4'>
            <h1 className='font-mono text-6xl text-white font-bold'>27<span className='text-3xl'>C</span></h1>
            <h1 className=' text-4xl text-white'>Light Rain</h1>
            <h1 className='text-2xl text-white'>Today</h1>
            <h1 className='text-xl text-white'>location</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
