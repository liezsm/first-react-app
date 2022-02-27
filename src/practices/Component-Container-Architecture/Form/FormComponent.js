// exp aslo called the presentational 
// exp can be usually written in functional 

import React from "react";

function FormComponent(props){

    // console.log(props)
    // const {fName, lName, isFriendly, gender, favColor } = props.data
    const {fName, lName, isFriendly, gender, favColor } = props
    return (
        <main>
            <form >
               
                  <label >
                  Type:
              </label>
                <input type="text"
                name='fName'
                value={fName}
                placeholder='Enter first name' 
                onChange={props.handleChange}
                />

              <label >
                  <br />
                  Type:
              </label>
                <input type="text"
                name='lName'
                value={lName}
                placeholder='Enter last name' 
                onChange={props.handleChange}
                />

              <label >
                  <br />
                  Type:
              </label>
                <input type="checkbox"
                name='isFriendly'
                value={isFriendly}
                checked={isFriendly}
                onChange={props.handleChange}
                /> Is friendly?
              <label >
                  <br />
                
              </label>
                <input type="radio"
                name='gender'
                value='male'
                checked={gender ==="male"}
                onChange={props.handleChange}
                /> male
              <label >
                  <br />
            
              </label>
                <input type="radio"
                name='gender'
                value= 'female'
                checked={gender ==="female"}
                onChange={props.handleChange}
                /> female

                <br />

                <label >
                    Your favorite color:
                    <select value={favColor}
                    name="favColor"
                    onChange={props.handleChange}>
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
            <h1>{fName} {lName}</h1>
            {gender && <h1>You are: {gender}</h1>}
            {favColor && <h1>Your favorite color: {favColor}</h1>}
           
        </main>

    )
}

export default FormComponent