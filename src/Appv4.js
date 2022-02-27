import React from 'react';
import Joke from './practices/JokeApp/Joke';
import jokeData from './practices/JokeApp/jokeData';


function Appv4 (){

const jokeComponents =jokeData.map( joke => <Joke key={joke.id} question= {joke.question} answer={joke.punchline}/>)


    return (
        <div>
            {jokeComponents}
            {/* <Joke  question ="Am I pretty?" 
            answer="Not really"
            />
            <Joke answer="Not really"
            />
            
            <Joke  question ="Am I good?"
             answer="Yes really"
            />

            <Joke question ="Am I savage?" 
            answer="Pretty savage"
            /> */}
            
        </div>
    )
}
export default Appv4;