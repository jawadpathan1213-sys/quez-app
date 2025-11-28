import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Subjects from './components/Subjects'
import Questions from './components/Questions'
import Result from './components/Result'


const App = () => {
  return (
    <div className='bg-[#48cae4] h-fit w-[100vw] text-white'>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/menu' element = {<Subjects />} />
        <Route path='/computer' element = {<Questions />} />
        <Route path='/nature' element = {<Questions />} />
        <Route path='/knowledge' element = {<Questions />} />
        <Route path='/history' element = {<Questions />} />
        <Route path='/result' element = {<Result />} />
      </Routes>
      
    </div>
  )
}

export default App
