import React from 'react';
import '../App.css';
import './Header.css';
import TypingAgain from './TypingAgain';

export default function Header() {
    return (
        <div className='header-container'>
            <h1>
                <TypingAgain
                    words={["cd ..", "cd /\"sean stanley\""]}
                />
            </h1>
            <p>
                i'm a software developer. i like javascript, react, and things that look 
                nice. i'm currently a senior at the university of florida.
            </p>
        </div>
    )
}
