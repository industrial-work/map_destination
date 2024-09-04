import React from 'react'
import './PopUp.css'

function PopUp(props) {
  return (props.trigger)?(
    <div className="popup">
        <div className="inner-popup">
            <button className='close-popup' onClick={()=>props.setTrigger(false)}>X</button>
            {props.children}
        </div>
    </div>
  ):"";
}

export default PopUp