import React from 'react'

let data = [
  {
    date: '2020-12-11',
    minTemp: '25C',
    maxTemp: '29C'
  },
  {
    date: '2020-12-12',
    minTemp: '23C',
    maxTemp: '28C'
  },
  {
    date: '2020-12-13',
    minTemp: '24C',
    maxTemp: '28C'
  },
  {
    date: '2020-12-14',
    minTemp: '24C',
    maxTemp: '29C'
  },
  {
    date: '2020-12-15',
    minTemp: '26C',
    maxTemp: '30C'
  }
]

const SingleCard = () => {
  return (
    <div className='grid grid-cols-5 gap-1'>
        {
          data.map(value =>
            <div className='p-4 text-white rounded-sm bg-gray-700'>
              <h1>{value.date}</h1>
              <div className='flex justify-between '>
                <p>{value.minTemp}</p>
                <p>{value.maxTemp}</p>
              </div>
            </div>

          )
        }
      </div>
  )
}

export default SingleCard
