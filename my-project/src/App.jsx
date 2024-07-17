import React from 'react'
import NavBar from './components/NavBar'
import { MouseFollower, UpdateFollower } from 'react-mouse-follower'

const App = () => {
  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower className="sample"
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 999,
        followSpeed: 1.5,
      }}>
      <NavBar />  
      </UpdateFollower>
      
    </main>
  )
}

export default App
