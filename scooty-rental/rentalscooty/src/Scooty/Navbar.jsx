import React from 'react'
import  "./Navbar.css"
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <div className='main_div'>
        <div className='inner_div'>
          <Link to={""}>Scooty Rental</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={""}>Logout </Link>
        </div>
      </div>
    </div>
  )
}
