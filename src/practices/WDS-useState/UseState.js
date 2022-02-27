
import React, {useState} from "react";


// reminder: useState tutorial by WebDevSimplified
// exp we can only use useState in functional components
// exp when using useState(), they must execute in they same order
// exp We cannot useState in conditional statements (IF, loops , functions etc)

// exp there are two ways to pass a state in useState(), first way: exp = useState(4), secondway: example=useState(takes in a function version), it is considered a best practices since it only runs once the very first time your component rendered

// exp useState() when passing object example: useState( { count: 4, them: 'blue'})
function countInitial() {
    console.log('run');
    return 4;
}
function UseState() {
// exp [currentstate, toupdate]
// const [count, setCount] = useState(countInitial())
// const [count, setCount] = useState( () => countInitial())

const [state, setState] = useState({ count: 4, theme: 'blue'})
const county = state.count;
const theme = state.theme;

// exp or another way is to separate them in their own useState hook

const [count, setCount] = useState(4)
const [themey, setTheme] = useState('blue')


    // function decrementCount() {
    //     setCount(count - 1)
    // } 
    // exp func above is not the best caase to update, instead like the class, we can pass a function inside the setCount so we can have access to the previous state

    // function decrementCount() {
    //     setCount( prevCount => prevCount - 1)
    // }

    // exp setState when object is passed
    // function decrementCount() {
    //     setState( prevState =>{
    //         return {
    //             ...prevState,
    //             count: prevState.count -1 
    //         }
    //     })
    // }

    // exp individual count
    function decrementCount() {
        setCount( prevCount => prevCount  - 1)
        setTheme('red')
    }
    // function incrementCount() {
    //     setCount( prevCount => prevCount + 1)
    // }

    //  exp object passed for increment func

    //   function incrementCount() {
    //     setState( prevState =>{
    //         return {
    //             ...prevState,
    //             count: prevState.count + 1 
    //         }
    //     })
    // }

    // exp individual count, tehm
    function incrementCount() {
        setCount( prevCount => prevCount + 1)
        setTheme('blue')
    }

  return (
    <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{themey}</span>
        <button onClick={incrementCount}>+</button>
    </div>
  )
}

export default UseState