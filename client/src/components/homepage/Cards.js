import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Choose below what you want to play</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                       <CardItem 
                       src="images/img-10.jpg"
                       text="Noughts and Crosses"
                       label="Game"
                       path='/game'
                       />
                         
                         <CardItem 
                       src="images/img-11.jpg"
                       text="Test your Knowledge"
                       label="Quiz"
                       path='/Quiz'
                       />
                         
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
