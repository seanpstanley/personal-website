import React from 'react'
import './Cards.css'
import Card from './Card'
import TypingEffect from './TypingEffect'

export default function ExperienceCards() {
    return (
        <div className='cards'>
            <TypingEffect 
                words={["cd ..", "cd work_experience"]}
            />
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Card 
                            company='University of Florida'
                            img='../../images/uf_seal.png'
                            alt='UF logo'
                            dates='December 2020 – Present'
                            position='Undergraduate Researcher, PPCards'
                            text='Working in UF&#39;s Human-Centered Computing Lab on PPCards, a card-based 
                                augmented reality learning platform for prototyping electronic circuits using 
                                OpenCV&#39;s deep learning libraries with Python. Incorporates real-time 
                                feedback on mistakes made by users. Co-authoring a soon-to-be published 
                                research paper on the project.'
                            tech='Python, OpenCV, Open Sound Control, Unity'
                            // link_names={['','']}
                            // links={['', '']}
                            // icons={['','']}
                        />
                    </ul>
                    <ul className='cards__items'>
                        <Card
                            company='University of Florida'
                            img='../../images/uf_seal.png'
                            alt='UF logo'
                            dates='January 2020 – May 2020'
                            position='Full Stack Developer, Gator Trader'
                            text='Worked on a team with UF faculty to develop a responsive React replacement
                                for UF&#39;s Textbook Exchange web service with goals of modernizing the 
                                site&#39;s look and reducing load times by at least 50%.'
                            tech='React, React-Router, Bootstrap, Express'
                            link_names={['GitHub']}
                            links={['https://github.com/seanpstanley/react-gator-trader/', '']}
                            icons={['fab fa-github']}
                        />
                    </ul>
                    <ul className='cards__items'>
                        <Card
                            company='XDG Technologies'
                            img='../../images/xdg_logo_full.png'
                            alt='XDG Technologies logo'
                            dates='October 2019 - December 2019'
                            position='Front-End Developer, XDG Technologies Website'
                            text='Worked with XDG to replace their outdated Wordpress site with a responsive
                                React web application. Used Figma to mock up high-fidelity prototypes of 
                                modular React components. Included order and payment processing functionality
                                usign Stripe.'
                            tech='React, React-Router, Bootstrap, Heroku, MongoDB'
                            link_names={['XDG Website','GitHub']}
                            links={['http://xdg-site.herokuapp.com/', 'https://github.com/CEN30315A/Site/']}
                            icons={['fas fa-link', 'fab fa-github']}
                        />
                    </ul>
                    <ul className='cards__items'>
                        <Card
                            company='Burnley Consulting'
                            img='../../images/shrug_full.png'
                            alt='No logo available'
                            dates='May 2018 - August 2018'
                            position='Software Engineer Intern'
                            text='Developed computer vision software using open-source machine-learning 
                            libraries for autonomous robotics. Used OpenCV&#39;s pre-trained deep 
                            neural networks (DNN) module with Java to facilitate recognition of several 
                            kinds of objects that the robot interacted with contextually.'
                            tech='Java, OpenCV'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}