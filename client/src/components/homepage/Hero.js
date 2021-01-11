import React from 'react'
import {Button} from './Button';
import './Hero.css';


function Hero() {
    return (
        <div className='hero-container'>
            <video src="/Videos/video-1.mp4" autoPlay loop muted />
            <h1>ARE YOU READY?</h1>
           
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                    </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH TRAILER <i className= 'far fa-play-circle' />
                    </Button>
            </div>

            
        </div>
    )
}

export default Hero
