import React from 'react'

function Heading(props) {
  return (
    <div>
      <h1 className={`text-center my-3 text-${props.chmode ? "dark" : "light"}`}>{props.text}</h1>
    </div>
  )
}

export default Heading