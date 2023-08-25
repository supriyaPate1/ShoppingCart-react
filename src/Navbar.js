import React from 'react'
import './navbar.css'
import { Outlet, Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <div className='Nav'>
        <div className='icon'>
          <i class="fa fa-hourglass-start" aria-hidden="true"></i>
        </div>   
        <div className='abv'>             
        </div>
        <div className='text'>
        <h5><Link to ="/">Home</Link></h5>
        </div>
        <div className='text'>
           <h5><Link to="/Feedback">Feedback</Link></h5>
        </div>
        <div className='text'>
           <h5><Link to="/Contact">Contact</Link></h5>
        </div>
        <div className='text'>
           <h5><Link to="/Cart">Cart{props.quan}</Link></h5>
        </div>
      </div>  
      <div>

      </div>
      
      <Outlet/>
    </>
    
  )
}
