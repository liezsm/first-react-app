import React, {Component,useState} from 'react'
// import Conditional from './practices/ConditionalRender/Conditional'
// import Conditional2 from './practices/ConditionalRender/Conditional2'
import Button from './practices/ConditionalRender/Button'

// class Appv6 extends React.Component {

//     constructor(props){
//         super(props)
//         // exp for condtionalrender topic
//         this.state = {
//             isLoading: true
//         }
//     }

//     componentDidMount() {
//         setTimeout( ()=> {
//                 this.setState({
//                     isLoading: false
//                 })
//         }, 1500)
//     }

//     render() {

//         return (
//             <div>
//                 {this.state.isLoading ? <h1>Loading...</h1> :
//                 <Conditional />
//                 }
//             </div>
//         )
//     }
// }


// todo conditonal render part2
// class Appv6 extends React.Component {

//     constructor(props){
//         super(props)
//         this.state = {
//             unreadMessage: ['a', 'b']
//         }
//     }

//     render() {

//         return (
//             <div>
//                { this.state.unreadMessage.length > 0 &&
//                 <Conditional2  message ={this.state.unreadMessage}/>
//                 }
//             </div>
//         )
//     }
// }

// exp for conditional rendering practice exercise

// function Appv6 () {

//     const [logged, setLogged] = useState(true)
//     function handle() {
//         setLogged( prevLog => !prevLog)
//     }
//   return (
//     <div>
//         <Button handle={handle}
//         text={logged? 'in' : 'out'}
//         />
//         <h1>
//             You are logged {logged? 'out' : 'in'}
//         </h1>
//     </div>
//   )
// }
// exp for conditional rendering practice exercise class based

class Appv6 extends React.Component{

        constructor(props){
            super(props)
            this.state ={
                isLogged: false
            }
            this.handleChange = this.handleChange.bind(this)
        }
        handleChange(){

            this.setState( prevState => {
                return {
                    isLogged: !prevState.isLogged
                }
            })

        }

        render(){

            return (
                <div>

                    <h1>You've logged {this.state.isLogged ? "in" : 'out'}</h1>{}
                    <Button handle={this.handleChange} text={this.state.isLogged ? 'out' : 'in'}/>
                </div>
            )
        }
}

export default Appv6