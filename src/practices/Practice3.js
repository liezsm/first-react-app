

// -setup a reactapp from scratch
// inside teh app, only navbar, mainontent & footer

import React from 'react';
import './practice.css';

function Practice3() {
    return (
        <>
        <Footer />
        </>
    );
}


function Footer() {

    return (
        <footer>
        <h3>
            This is my footer
        </h3>
        </footer>
    );
}

export default Practice3;