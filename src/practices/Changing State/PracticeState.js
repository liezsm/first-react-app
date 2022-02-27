import React, {Component} from 'react';

class PracticeState extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

 handleClick() {
    // console.log('clicked');
    // exp when we want to know the previous data of state, use a function inside the setState so we can see its previous value
    // exp if we dont care about its previoius value, we can directly change the state inside the setState func
    this.setState( (prevState) => {
        return {
            count: prevState.count + 1,
        }
    })
}

    render() {
          return (
        <div>
                <h1>{this.state.count}</h1>

                <button 
                onClick={ () => this.handleClick() }>Change!</button>
        </div>
    )
    }
  
}

export default  PracticeState;