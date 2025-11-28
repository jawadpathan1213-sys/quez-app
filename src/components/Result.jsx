import React, { useContext } from 'react'
import { ScoreContext } from '../context/ScoreContext'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Result = () => {
    const {result } = useContext(ScoreContext)
  return (
    <div className='flex flex-col items-center justify-center h-full text-black text-xl cursor-default '>
        <Link className='self-start pl-[5vw]' to='/menu'><h1 className="text-gray-200 text-xl font-light rounded-full p-2 hover:bg-[#297d99] w-10 h-10 flex items-center"><FaArrowLeft/></h1></Link>
    <div className='bg-[#0096c7] w-[90vw] self-center text-center flex flex-col items-center py-5 px-[5vw] gap-5 rounded-2xl'>
       <h1 className='font-bold'>Quiz Result</h1>
        <p>Total Questions : 10</p>
        <p>Correct Answers : {result}</p>
        <p>Score : {result}0%</p>
        <Link className='w-full' to='/'><button className='text-white bg-[#023e8a] w-full p-2 rounded-[5px] cursor-pointer'>Go To Home</button></Link>
    </div>
    </div>
  )
}

export default Result
