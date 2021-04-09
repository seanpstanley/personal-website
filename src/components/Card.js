import React from 'react';
import './Cards.css';

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card-link'>
                <div className='profile-sidebar'>
                    <img className='profile-image' src={props.img} alt={props.alt} />
                    {Array.isArray(props.icons) && (  
                        <ul className='social-list'>
                            {props.icons.map((icon, idx) => 
                                <li className='social-item'>
                                    <a aria-label={props.link_names[idx]} className='social-link' href={props.links[idx]}>
                                        <i class={props.icons[idx]} />
                                    </a>
                                </li>
                            )}
                        </ul>
                    )}
                </div> 
                <div className='profile-main'>
                    <h2 className='profile-name'>{props.company}</h2>
                        <p className='profile-dates'>
                            {props.dates}
                        </p>
                        <p className="profile-position">
                            {props.position}
                        </p>
                        <p className="profile-body">
                            {props.text}
                        </p>
                        <p className='profile-tech'>
                            {props.tech}
                        </p>
                </div> 
            </div>
        </div>
    )
}
