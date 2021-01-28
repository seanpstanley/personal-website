import React from 'react';
import '../App.css';
import './Typing.css';
import './NewTyping.css';
/*import Typewriter from 'typewriter-effect';*/

function Typing (props) {
    return (
        /*<div class='typing-container'>*/
        /*<div class='typing-demo'>
                <h1>
                    c:\>cd /users/"sean stanley"
                </h1>
            </div>
            <p>
                i'm a software developer who likes Javascript, React, and UX. i'm currently a senior at not cornell university. 
            </p>*/
            <div className='parent' >
                {props.directory}
                <div className='border'></div>
            </div>
        /*</div>*/
    );
}

export default Typing;