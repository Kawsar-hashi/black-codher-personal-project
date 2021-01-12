import React from 'react'
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Choose below what you want to play</h1>
            <div className="cards__container">
                <div classname="cards__wrapper">
                    <ul className="cards__items">
                       <CardItem 
                       src="images/img-9.jpg"
                       text="explore"
                       label="Game"
                       path='/game'
                       />
                         <CardItem 
                       src="images/img-9.jpg"
                       text="explore"
                       label="Game"
                       path='/game'
                       />
                         <CardItem 
                       src="images/img-9.jpg"
                       text="explore"
                       label="Game"
                       path='/Quiz'
                       />
                         <CardItem 
                       src="images/img-9.jpg"
                       text="explore"
                       label="Game"
                       path='/Quiz'
                       />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
