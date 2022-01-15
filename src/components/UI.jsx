import React from 'react'
import CardsComponents from './CardsComponents'
import Search from './Search'

let image = 'https://www.metaweather.com/api/static/img/weather/sn.svg'
const UI = () => {
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-4 '>
        <Search image={image} />
      </div>
      <div className='col-span-8'>
        <CardsComponents/>
      </div>
    </div>
  )
}

export default UI
