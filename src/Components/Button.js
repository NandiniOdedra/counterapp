import React from 'react'

function Button(props) {
  return (
    <>
      <button type="button" className={`btn rounded-circle mx-1 btn-${props.upmode ? "dark" : "light"}`} onClick={props.func}>{props.text}</button> 
    </>
        
  )
}

export default Button