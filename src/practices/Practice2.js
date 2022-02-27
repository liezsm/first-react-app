// -topic: functional components
// Create a functional component called MyInfo that returns the following UI:
// a. h1 with your name
// b. a paragraph with about yourself
// c. an ordered or unordered list of top 3 vacations spots youd like

//  Rendere an instance of that functional compoenne to the browser
// -extra challenge: learn how to style

import React from 'react';
import './practice.css';


function Practice2() {

    return (
        <>
           < MyInfo />
        </>
    );
}

function MyInfo() {

    return (
        <>
            <h1> Lae Emmanuel</h1>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis suscipit atque eum doloribus ratione necessitatibus? Minima eos incidunt reiciendis quis! 
            </p>

            <ul>
                <li>Egypt</li>
                <li>Switzerland</li>
                <li>Alaska</li>
            </ul>
        </>
    );
}

export default Practice2;