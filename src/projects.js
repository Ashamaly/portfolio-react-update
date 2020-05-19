import React from 'react';
import './css/styles.css';

import raw from './images/raw.png'
import gazoot from './images/gazoot.png'
import nozoma from './images/nozoma.png'
import chatrade from './images/chatrade.png'

function Projects() {
return (
    <div className='projects'>
        <div className='pitem'>
            <h1>Raw Barber</h1>
            <a className='imga' href='https://github.com/DanielLMA/MERN_Assignment_Documentation'><img border="0" alt="" width="250px" src={raw} /></a>
            <p>The purpose of this group project was to create an website for our client Raw Barber to help increase online presence to their requests and specification.</p>
            <a className='links' href='https://github.com/DanielLMA/MERN_Assignment_Documentation'>Documentation</a>
            <a className='links' href='https://github.com/DanielLMA/MERN_front_end'>Front end</a>
            <a className='links' href='https://github.com/DanielLMA/MERN_back_end'>Back end</a>
        </div>

        <div className='pitem'>
            <h1>Nozoma</h1>
            <a href='https://github.com/Ashamaly/round2' className='imga'><img border="0" alt="" width="250px" src={nozoma} /></a>
            <p>The purpose of this course is to create a two-sided marketplace that connects users to each other, allowing them to buy and sell books between them with rails and postgres.</p>
            <a className='links' href='https://github.com/Ashamaly/round2'>GitHub</a>
        </div>

        <div className='pitem'>
            <h1>ChaTrade</h1>
            <a href='https://github.com/Ashamaly/chat-app' className='imga'><img border="0" alt="" width="250px" src={chatrade} /></a>
            <p>The purpose of ChaTrade is to connect registered users to one another via chat rooms so they can practice speaking different languages with each other using rails and postgres.</p>
            <a className='links' href='https://github.com/Ashamaly/chat-app'>GitHub</a>
        </div>

        <div className='pitem'>
            <h1>Gazoot</h1>
            <a href='https://github.com/Ashamaly/Gazoot' className='imga'><img border="0" alt="" width="250px" src={gazoot} /></a>
            <p>Gazoot is a quiz/action hybrid created using Ruby where answering questions correctly (and quickly!) allow you to attack and take down a monster. This project was to review and build on skills learned in my first 2 weeks of coding.</p>
            <a className='links' href='https://github.com/Ashamaly/Gazoot'>GitHub</a>
        </div>
    </div>
);
}

export default Projects;