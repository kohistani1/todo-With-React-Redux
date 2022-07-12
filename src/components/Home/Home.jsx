import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
 const navigate = useNavigate()

 return (
  <div style={{ margin: '10rem auto' }}>
   <h2 style={{ margin: '2rem auto' }}>Welcome to App</h2>
   <button className='btn' onClick={() => navigate('login')}>login</button>
   <button className='btn' onClick={() => navigate('register')}>register</button>
  </div>
 )
}

export default Home