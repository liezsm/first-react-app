import React from 'react'
import './joke.css'

function Joke(props) {
 
  return (
    <div  style={{ backgroundColor: !props.question && 'blue'}} >
        {/*  if the joke has no question, it will automatically only show the pun hline */}
        <h3 
        className={props.question ? 'show' : 'hide'}>
            Question:{props.question}
        </h3>
       
        <h3>Answer:{props.answer}</h3>
        <hr />
    </div>
  )
}

export default Joke;