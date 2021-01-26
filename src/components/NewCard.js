import React from 'react';
import './NewCard.css';

function NewCard() {
    return (
        <div className='card'>
            <div className='profile-sidebar'>
                <img className='profile-image' src='https://i.pravatar.cc/125' alt='' />
                <ul className='social-list'>
                    <li className='social-item'>
                        <a aria-label='github' className='social-link' href="#">
                            <i class="fab fa-github" />
                        </a>
                    </li>
                    <li className='social-item'>
                        <a aria-label='' className='social-link' href="#" >

                        </a>
                    </li>
                    <li className='social-item'>
                        <a aria-label='' className='social-link' href="#">
                        </a>
                    </li>
                </ul>
            </div> 
            <div className='profile-main'>
                <h2 className='profile-name'>big boy</h2>
                    <p className="profile-position">
                        graphic designer
                    </p>
                    <p className="profile-body">
                        nothing imrpotant lorem ipsum suck my nuts
                    </p>
            </div> 
        </div>
    )
}

export default NewCard
