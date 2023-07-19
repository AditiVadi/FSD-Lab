import React from 'react'
import './Task.css';
function Task() {
  return (
    <div>
        <h1>
            Float one
        </h1>
        <p>Description</p>
        <div className='box1'>
            <div className='inside_box'>
            <div className='text'>
                one two
            </div>
            </div>
            <div className='textbet'>
            Two boxes should <br/>float to either side of <br/> this text. 
            </div>
            <div className='inside_box2'>
            <div className='text'>
                Two
            </div>
            </div>
        </div>
    </div>
  )
}

export default Task