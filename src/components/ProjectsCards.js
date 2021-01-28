import React from 'react'
import './NewCard.css'
import NewCard from './NewCard'
import TypingAgain from './TypingAgain'

export default function ProjectsCards() {
    return (
        <div className='cards'>
            <TypingAgain 
                words={["cd ..", "cd /projects"]}
            />
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <NewCard 
                            company='5easy Tabletop RPG Aide'
                            img='../../images/site_logo_100.png'
                            alt='Site logo'
                            dates=''
                            position=''
                            text='Working on creating an Open Gaming License-compliant alternative to sites 
                                like D&#38;D Beyond. Using React with Redux to manage the state of each 
                                player&#39;s character. Includes multiplayer party functionality.'
                            tech='Redux, Redux, React-Router, Material-UI, Express'
                            link_names={['GitHub','']}
                            links={['https://github.com/kaseykaufmann/Roll-For-Init/', '']}
                            icons={['fab fa-github','']}
                        />
                    </ul>
                    <ul className='cards__items'>
                        <NewCard
                            company='Personal Website'
                            img='../../images/site_logo_100.png'
                            alt='Site logo'
                            dates=''
                            position=''
                            text='I wanted to test my skills by creating a React app using React-Router and
                                React Hooks without using any template. I also wanted to avoid using Bootstrap
                                or any other CSS libraries. It also sounds cool to say "I have a website."'
                            tech='React, React-Router'
                            link_names={['GitHub','']}
                            links={['https://github.com/seanpstanley/personal-website/', '']}
                            icons={['fab fa-github', '']}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}