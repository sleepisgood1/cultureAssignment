import React from 'react'
const Modal = () => {
  return (
    <div>
      <img src={props.data.url} onClick={handleClose}/>
    </div>
  )
}
export default Modal