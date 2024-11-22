import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed.jsx'
import Profile from './pages/Profile.jsx'
import Register from './pages/Register.jsx'
import Search from './pages/Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Social Media App</h1>
      
      <div>
        <Routes>
          <Route path='/' element={<Feed/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/search' element={<Search/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
