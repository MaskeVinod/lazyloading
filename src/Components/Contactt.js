import React from 'react'
import { Link } from 'react-router-dom'

function Contactt() {
  return (
    <>
      <h1>Contact</h1>
      <Link to={'/'}>Home</Link>
      <br/>

      <Link to={'/admin'}>Admin</Link>
    </>
  )
}

export default Contactt