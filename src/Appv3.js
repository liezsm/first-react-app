import React from 'react'
import Todos from './practices/Todo App/Todos'
import todosData from '././practices/Todo App/todosData'
// import './practices/practice.css'


class Appv3 extends React.Component {


  constructor(props){
    super(props)
    this.state ={
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(id) {

    this.setState( prevState => {
      const updateTodos = prevState.todos.map( todo => {
        if(todo.id === id){
           return {
             ...todo,
             completed: !todo.completed
           }
        
          }
          return todo;
        })
        
        return {
          todos: updateTodos
        }
      })
      
    }

  render(){


    return ( 
    <div>
    <Todos todos ={this.state.todos} handleChange={this.handleChange}/>
    </div>
  );
  }
  
}

// class Appv3 extends React.Component {

//   // exp state => is simply the date that the component maintains
//   constructor(props){
//     super(props);
//     this.state = {
//       name: 'laemier',
//         isLogged : true
//     }
//   }

// // exp create functions above the render
  
//  render() {
//   // exp calling the method using this.yourmethodname
//   // exp display logics goes here, and styling
//   const date = new Date();
//    return (
//         //  reminder: when using props with class components, use this.props
//       <div>
//         {/* Hello, class component! */}
//         {/* <h1>{date.getHours()}: {date.getMinutes()}</h1> */}

//         <Header username = {this.state.name} />
//         <Greeting />
//         <PracticeState isLogged ={this.state.isLogged} />
//       </div>
//    )
//  }

// }

// todo TOPIC: CLASS BASED COMPONENTS PRACTICE

// class Header extends React.Component {

//   constructor(props) {
//     super(props)

//   }

//   render() {
//     return (
//       <header>
//         <p>Welcome, {this.props.username}</p>
//       </header>
//     )
//   }
// }
// class Greeting extends React.Component {

//   constructor(props) {
//     super(props)

//   }

//   render() {

// const date = new Date(2020,12,12,10,1)
// const hour = date.getHours()
// let min = date.getMinutes();
// if(min < 10) {min =`0${min}`}
// let designation;
// if(hour < 12){
//   designation ='morning'
// }
// else if(hour >= 12 && hour < 17){
//   designation ="afternoon"
// }
// else {
//   designation ="night"
// }
// const days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//     return (
//       <div>
//           <h2>Good {designation} sir or madam!</h2>
//           <h3>Date: {days[date.getDay()]}-{date.getMonth()}-{date.getDate()}-{date.getFullYear()} {hour}:{min}</h3>
//       </div>
//     )

//   }
// }

// todo state practice

// class PracticeState extends React.Component {

//   constructor(props){
//     super(props)
//   }

//   render(){
//     let wordDisplay = this.props.isLogged ? "in" : 'out';
    
//     return (
//       <div>
//         <h1>You are currently logged {wordDisplay}</h1>
//       </div>

//     )
//   }
// }
export default Appv3;