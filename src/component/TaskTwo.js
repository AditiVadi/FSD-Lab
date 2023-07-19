import React from 'react'
import './TaskTwo.css'

function TaskTwo() {
  return (
    <div className='main'>
        <h1>Float Two</h1>
        <p>In this example, the element with a class of float should be floated left. Then we want the first line of text to display next to that element, but the following line of text (which has a class of .below) to display underneath it. You can see th desired result in the image</p>
        <div className='mainbox'>
             <div className='boxinside'>
                <div className='text'>
                <p>Float</p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default TaskTwo