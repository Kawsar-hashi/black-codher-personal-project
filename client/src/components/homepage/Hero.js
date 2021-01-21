import React from 'react'
import {Button} from './Button';
import './Hero.css';


function Hero() {
    return (
        <div className='hero-container'>
            <video src="/Videos/video-1.mp4" autoPlay loop muted />
            <h1>ARE YOU READY?</h1>
            <p>SETLE IN</p>   
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    GET STARTED
                    </Button>
                
            </div>

            
        </div>
    )
}

export default Hero
