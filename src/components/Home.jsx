import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='overflow-x-hidden text-center flex justify-center '>
      <div className='bg-[#0096c7] w-[85vw] my-[4vw] p-5 flex items-center flex-col gap-10 sm:gap-5 rounded-2xl'>
        <h1 className='text-[20px] font-bold mt-5'>Welcome to the Quiz App</h1>
        <img className='w-[300px]' src="/quez.png" alt="img" />
        <Link to='menu'><button className='bg-[#023e8a] rounded-xl py-3 px-5'>Get Started</button></Link>
      </div>
    </div>
  )
}

export default Home
