import React from 'react';
import './Cards.css';

export default function Card(props) {
    return (
        <div className='card'>
            <div className='card-link'>
                <div className='profile-sidebar'>
                    <img className='profile-image' src={props.img} alt={props.alt} />
                    <ul className='social-list'>
                        <li className='social-item'>
                            <a aria-label={props.link_names[0]} className='social-link' href={props.links[0]}>
                                <i class={props.icons[0]} />
                            </a>
                        </li>
                        <li className='social-item'>
                            <a aria-label={props.link_names[1]} className='social-link' href={props.links[1]}>
                                <i class={props.icons[1]} />
                            </a>
                        </li>
                    </ul>
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
