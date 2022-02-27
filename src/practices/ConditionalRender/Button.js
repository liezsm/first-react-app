import React from 'react'

function Button (props)  {
  return (
    <>
        <button onClick={props.handle}>Log {props.text}</button>
    </>
  )
}

export default Button