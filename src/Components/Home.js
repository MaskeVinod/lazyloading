import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to={'/contact'}>Contactt</Link>
      <br/>

      <Link to={'/admin'}>Admin</Link>
    </>
  )
}

export default Home