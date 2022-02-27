import React, { Component } from 'react'
import Fetching from './practices/FetchAPI/Fetching'
class Appv8 extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            loading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState( {loading: true})

       fetch('https://swapi.dev//api/people/1/')
       .then( resp => resp.json())
       .then( data => {
           this.setState( {
               loading:false,
               character: data
           })
       })
    }

    render(){
        const disp = this.state.loading ? 'Fetching...' : this.state.character.name
        return (
            <div>
               
             <Fetching  text ={disp} />
            </div>
        )
    }
}

export default Appv8