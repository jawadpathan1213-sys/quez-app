import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Subjects = () => {
  return (
    <div className='p-10 text-center flex flex-col gap-5 text-xs sm:text-base'>
         <Link to='/'><h1 className="text-gray-200 text-xl font-light rounded-full p-2 hover:bg-[#297d99] w-10 h-10 flex items-center"><FaArrowLeft/></h1></Link>
      <h1 className='pb-15  text-[15px] sm:text-2xl font-bold'>Step in, pick a subject, and shine!</h1>
      <Link to='/computer'><button className='flex w-full items-center flex-col bg-[#0096c7] rounded-xl'>
        <img className='w-5 sm:w-10' src="computer.png" alt="img" />
        <p>computer</p>
      </button></Link>
      <Link to='/history'><button className='flex w-full items-center flex-col bg-[#0096c7] rounded-xl p-0.5'>
        <img className='w-5 sm:w-10' src="history.png" alt="img" />
        <p>history</p>
      </button></Link>
      <Link to='/knowledge'><button className='flex w-full items-center flex-col bg-[#0096c7] rounded-xl p-0.5'>
        <img className='w-5 sm:w-10' src="knowledge.png" alt="img" />
        <p>general knowledge</p>
      </button ></Link>
      <Link to='/nature'><button className='flex w-full items-center flex-col bg-[#0096c7] rounded-xl p-0.5'>
        <img className='w-5 sm:w-10' src="nature.png" alt="img" />
        <p>nature</p>
      </button></Link>
    </div>
  )
}

export default Subjects
