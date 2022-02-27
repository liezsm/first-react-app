import React from 'react'


function MouseEvent() {

    const style ={
        width: "250px"
    }
    return (
        <div>
           <img style={style}
           src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="meme"
           onMouseOver={ ()=> alert('hovered')} />
           <br />
           <br />
           <button onClick={ () => alert('clicked')}
           >
               Click Me
            </button>
        </div>
    )
}

export default MouseEvent;