import React from 'react'
import './foter.css'
export default function Footersec() {
  return (
   <>
   <div className='last'>
    <footer>
      <div className='content'>
        <h2>See how much you can shop</h2>
        <p>How many hours do you want to save by shopping online</p>
        <input placeholder='hours'></input>
        <input placeholder='min'></input>
        <button>Calculate</button>
        </div>
    </footer>
   </div>
   </>
  )
}
