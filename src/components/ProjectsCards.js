import React from 'react'
import './Cards.css'
import Card from './Card'
import TypingEffect from './TypingEffect'

export default function ProjectsCards() {
    return (
        <div className='cards'>
            <TypingEffect 
                words={["cd ..", "cd /projects"]}
            />
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Card 
                            company='Roll for Init 5E Tabletop RPG Aide'
                            img='../../images/roll_for_init_logo.png'
                            alt='Site logo'
                            dates=''
                            position=''
                            text='Working on creating an Open Gaming License-compliant alternative to sites 
                                like D&#38;D Beyond. Using React with Redux to manage the state of each 
                                player&#39;s character. Includes multiplayer party functionality.'
                            tech='Redux, React, React-Router, Bootstrap, Sass, Express, Heroku, Webpack'
                            link_names={['RollForInit','GitHub']}
                            links={['https://rollforinit.herokuapp.com/', 'https://github.com/Roll-For-Init/Roll-For-Init']}
                            icons={['fas fa-link','fab fa-github']}
                        />
                    </ul>
                    <ul className='cards__items'>
                        <Card
                            company='Personal Website'
                            img='../../images/site_logo.png'
                            alt='Site logo'
                            dates=''
                            position=''
                            text='I wanted to test my skills by creating a React app using React-Router and
                                React Hooks without using any template. I also wanted to avoid using Bootstrap
                                or any other CSS libraries. It also sounds cool to say, "I have a website."'
                            tech='React, React-Router, Netlify'
                            link_names={['GitHub']}
                            links={['https://github.com/seanpstanley/personal-website/']}
                            icons={['fab fa-github']}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}