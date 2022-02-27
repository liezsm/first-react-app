
function Main(){

    // -topic: inserting javascript in jsx elements
    //  exp putting curly braces inside the jsx
    const fName = 'Lae';
    const lName = 'Emmanuel';
    const date = new Date();
    const hour = date.getHours();
 let  minutes = date.getMinutes();
 if(minutes < 10){ minutes = `0${minutes}`}
    let timeofDay = 'morning';
    let timestamp = 'AM'
    if( hour > 12) { timeofDay = 'afternoon'; timestamp='PM'}
    const time = `${hour% 12}:${minutes} `;
// exp or we can do styling like this:

const h2style = {
    color: 'green',
    textTransform: 'uppercase',
    fontSize: '2rem'
};

    return (
        <main>
            {/* inline styles = must put double curly braces 
            and   CSS PROPERTIES ARE IN CAMEL CASE*/}
            <h1>
                Hello, {`${fName}, ${lName}`}!
                <br />
                Good {timeofDay}
            </h1>
            <h2 style={h2style}>
                It is currently {time} {timestamp}
            </h2>
        </main>
    );
}

export default Main;