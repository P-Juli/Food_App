import { createPortal } from 'react-dom'
import './Modal.css'
import React from 'react'
import { ReactDOM } from 'react'



const Backdrop = (props) => {
    return(
        <div className='backdrop' onClick={props.hidecartHandler}></div>
    )
  }

const ModalOverlay = (props) => {
return(
<div className='modal'>
    <div className='content'> {props.children}</div>

</div>
)  
}



const Modal = (props) => {

  return (
   <>
   ReactDOM.createPortal(<Backdrop hidecartHandler={props.hidecartHandler}/>,getElementById("overlays"))
   ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,getElementById("overlays"))
    </>
  )
}

export default Modal
