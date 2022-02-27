import React , {Component} from 'react'
 
class FormPractice extends React.Component {
    
    constructor(props){
        super(props)
        this.state ={
            fName: '',
            lName: '',
            age: '',
            gender: '',
            location: "",
            diet: {
                isSalad: false,
                isVeggie: false,
                isIceCream: false,
                isFish: false

            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        // console.log(this.state.diet, event.target.checked, event.target.value)
        const {type, name, value, checked} = event.target;
        // let val = type ===  'checkbox' ? event.target.checked  : value;
        (type === 'checkbox') ?
        this.setState( prevState => {
            return {
                ...prevState,
                diet: {
                    ...prevState.diet,
                   [name] : checked
                }
            }
        })

        
        : this.setState({
            [name]: value
        })
    }

    render() {

      const dietinput= document.querySelectorAll('input[type="checkbox"]');
      const selectedDiet = [...dietinput].filter( i => i.checked).map( i=> <li key= {i.name}>{i.name.slice(2)}</li>)
      
   
    //   console.log([...dietinput], 'filter', selectedDiet)


        return (
            <main>
                <form >
                    <div className="input-container">
                    <label >Fistname:
                    <input type="text" 
                    placeholder='Enter first name'
                    name='fName'
                    value={this.state.fName}
                    onChange={this.handleChange}
                     />
                     </label>
                    </div>

                    <div className="input-container">
                    <label >Lastname:
                    <input type="text" 
                    placeholder='Enter last name'
                    name='lName'
                    value={this.state.lName}
                    onChange={this.handleChange}
                     />
                     </label>
                     </div>
                 
                     <div className="input-container">
                     <label >Age:
                    <input type="number" 
                    placeholder='Age'
                    name='age'
                    value={this.state.age}
                    onChange={this.handleChange}
                     />
                     </label>
                    </div>

                    <div className="input-container">
                     <label >Gender:
                    <input type="radio" 
                    name='gender'
                    value="male"
                      checked={this.state.gender == 'male'}
                    onChange={this.handleChange}
                     />Male
                     </label>
                     

                     <label >
                    <input type="radio" 
                    name='gender'
                    value="female"
                    checked={this.state.gender == 'female'}
                    onChange={this.handleChange}
                     />Female
                     </label>
                    </div>

                    <div className="input-container">

                        <label >
                            Location:
                            <select value={this.state.location} name="location" onChange={this.handleChange} >

                                <option value="">Please select</option>
                                <option value="asia">Asia</option>
                                <option value="europe">Europe</option>
                                <option value="africa">Africa</option>
                                <option value="north-america">North America</option>
                                <option value="australia">Australia</option>
                            </select>
                        </label>
                    </div>

                    <div className="input-container">
                        <label >Dietary Restrictions:
                            <br />
                            <div>
                            <input 
                            type="checkbox"
                            onChange={this.handleChange}
                             name="isSalad" 
                            checked={this.state.diet.isSalad}
                            
                             />
                             Salad
                            </div>
                            <div>
                            <input 
                            type="checkbox" 
                            onChange={this.handleChange}
                            name="isVeggie" 
                             checked={this.state.diet.isVeggie}
                            />
                            Veggie
                            </div>
                            <div>
                            <input 
                            type="checkbox" 
                            onChange={this.handleChange}
                            name="isIceCream" 
                             checked={this.state.diet.isIceCream}
                            />
                            Ice Cream
                            </div>
                            <div>
                            <input
                                type="checkbox" 
                                onChange={this.handleChange}
                                name="isFish" 
                                checked={this.state.diet.isFish}
                            />
                            Fish
                            </div>
                        </label>
                    </div>

                    <button style ={{display: 'block'}} 
                    type="submit">
                        Submit
                    </button>
                </form>


                <hr />
                <div>
                   {/* <h2> {this.state.diet}</h2> */}
                <h1>Entered Information:</h1>
            
                 {
                  this.state.fName && <h3>Your name: {this.state.fName} {this.state.lName}</h3>   }
                  {
                    this.state.age > 0 && <h3>Your age: {this.state.age} years old</h3>
                   }

                   {this.state.gender && <h3>{this.state.gender}</h3>}

                   <h3>{this.state.location && `Location: ${this.state.location}`}</h3>
                     <h2>Diet:</h2>
              <ol>
                  {selectedDiet}
              </ol>
           
                </div>
            </main>
        )
    }
}

export default FormPractice;