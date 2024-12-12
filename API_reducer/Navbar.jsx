import React from 'react'
import {Link} from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/services'>Services</Link>
        <Link to='/help'>Help</Link>
    </div>
  )
}
