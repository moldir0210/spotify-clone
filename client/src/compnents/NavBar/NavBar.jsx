import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
        <Link to={"/song"}>Song</Link>
        <Link to={"/album"}>Album</Link>
        <Link to={"/singer"}>Singer</Link>
    </div>
  )
}

export default NavBar