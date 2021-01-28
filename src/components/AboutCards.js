import React from 'react'
import './Cards.css'
import Card from './Card'
import TypingEffect from './TypingEffect'

export default function AboutCards() {
    return (
        <div className='cards'>
            <TypingEffect 
                words={["cd ..", "cd /about_me"]}
            />
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Card 
                            company='Me'
                            img='../../images/site_logo.png'
                            alt='Portrait'
                            dates='August 1998 - Present'
                            position=''
                            text='My name is Sean Patrick Jamison Stanley. I&#39;m 22 years old. I&#39;m a big
                                fan of entertainment media--like films and video games--and I&#39;m also a 
                                fan of learning how things work. I love video games, so I learned how to 
                                make them. I love computers, so I learned how to build them. I love 
                                software that looks cool and feels good to use, so that&#39;s what I plan to 
                                do.'
                            link_names={['LinkedIn','Facebook']}
                            links={['https://www.linkedin.com/in/seanpstanley/', 'https://www.facebook.com/sean.stanley.50364/']}
                            icons={['fab fa-linkedin','fab fa-facebook-f']}
                        />
                    </ul>
                    <ul className='cards__items'>
                    </ul>
                </div>
            </div>
        </div>
    )
}