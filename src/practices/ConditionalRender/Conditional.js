import React from "react";

function Conditional(props) {
    // if(props.isLoading){
    //     return (
    //         <div>
    //             Loading....
    //         </div>
    //     )
    // } 
    //     return (
    //         <div>
    //             Some cool stuff of conditional
    //         </div>
    //     )

    // todo ternary way
  
    // return (
    //     <div>
    //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, fugiat.</p>
    //         {props.isLoading ? <h1>Loading...</h1> : <h1>Some cool!</h1>}
    //         <footer>this is a footer</footer>
    //     </div>
    // )

      // exp best case to use conditional rendering is in parent element

      return (
          <div>
              <h1>Cool!</h1>
          </div>
      )
    
}

export default Conditional;