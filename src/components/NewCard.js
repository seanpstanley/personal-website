import React from 'react';
import './NewCard.css';

export default function NewCard(props) {
    return (
        <div className='card'>
            <div className='card-link'>
                <div className='profile-sidebar'>
                    <img className='profile-image' src={props.img} alt={props.alt} />
                    <ul className='social-list'>
                        <li className='social-item'>
                            <a aria-label='{props.link_name[0]}' className='social-link' href='{props.links[0]}'>
            
                            </a>
                        </li>
                        <li className='social-item'>
                            <a aria-label='{props.link_name[1]}' className='social-link' href='{props.links[1]}' >
                                <i class='fab fa-github' />
                            </a>
                        </li>
                    </ul>
                </div> 
                <div className='profile-main'>
                    <h2 className='profile-name'>{props.company}</h2>
                        <p className="profile-position">
                            {props.position}
                        </p>
                        <p className="profile-body">
                            {props.text}
                        </p>
                </div> 
            </div>
        </div>
    )
}
