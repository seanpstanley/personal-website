import React from 'react'
import './NewCard.css'
import NewCard from './NewCard'

export default function NewCards() {
    return (
        <div className='cards'>
            {/*insert typing component here*/}
            <h1>C:\{'>'}cd/work_experience</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <NewCard 
                            company='University of Florida'
                            img='../../images/uf_logo.png'
                            alt='UF logo'
                            dates='December 2020 – Present'
                            position='Undergraduate Researcher'
                            text='hellooooooooooooooooooooooooooooooooooooo'
                            link_names={['hi','hi']}
                            links={['hi', 'hi']}
                        />
                        <NewCard 
link_names={['','']}
links={['https://github.com/seanpstanley/', '']}
                        />
                    </ul>
                    <ul className='cards__items'>
                        <NewCard
                        />
                        <NewCard
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}