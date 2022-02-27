import React from "react";
import FormComponent from "./FormComponent";
class FormContainer extends React.Component {

    constructor(props){
        super(props)
        this.state ={
             fName: '',
            lName: '',
            isFriendly: true,
            gender: "",
            favColor: ''

        }

         this.handleChange = this.handleChange.bind(this)
    }

     handleChange(event){
        // console.log(event.target)
        // console.log(event.target.checked, this.state.isFriendly)
        const {type,name,value} = event.target
        const val = type =="checkbox" ? event.target.checked : value
        this.setState( {
            [name]: val
        })
    }

    render(){

        return (
            <FormComponent 
                handleChange={this.handleChange}
                // data={{...this.state}}
                {...this.state}
            />
        )
    }
}

export default FormContainer