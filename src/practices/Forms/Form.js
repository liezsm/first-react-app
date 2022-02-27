import React, {Component} from 'react'

class Form extends React.Component {

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
    render() {

       

        return (
            <div>

            <form>
              <label >
                  Type:
              </label>
                <input type="text"
                name='fName'
                value={this.state.fName}
                placeholder='Enter first name' 
                onChange={this.handleChange}
                />

              <label >
                  <br />
                  Type:
              </label>
                <input type="text"
                name='lName'
                value={this.state.lName}
                placeholder='Enter last name' 
                onChange={this.handleChange}
                />

              <label >
                  <br />
                  Type:
              </label>
                <input type="checkbox"
                name='isFriendly'
                value={this.state.isFriendly}
                checked={this.state.isFriendly}
                onChange={this.handleChange}
                /> Is friendly?
              <label >
                  <br />
                
              </label>
                <input type="radio"
                name='gender'
                value='male'
                checked={this.state.gender ==="male"}
                onChange={this.handleChange}
                /> male
              <label >
                  <br />
            
              </label>
                <input type="radio"
                name='gender'
                value= 'female'
                checked={this.state.gender ==="female"}
                onChange={this.handleChange}
                /> female

                <br />

                <label >
                    Your favorite color:
                    <select value={this.state.favColor}
                    name="favColor"
                    onChange={this.handleChange}>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
                    </select>
                </label>
            </form>
            <h1>{this.state.fName} {this.state.lName}</h1>
            {this.state.gender && <h1>You are: {this.state.gender}</h1>}
            {this.state.favColor && <h1>Your favorite color: {this.state.favColor}</h1>}

            </div>
        )
    }
}

export default Form;