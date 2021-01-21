import React, {useState} from 'react'


function Quiz() {
    const  [questions, setQuestions]= useState([
        {
            question: 'What is the name of Beyonce-s fangroup?',
            answers: [
                {text: 'Beehive', correct : true},
                {text: 'The Bees', correct: false},
                {text: 'The Beeznees', correct: false},
                {text: 'The Wasps' , correct: false},
                
            ]
        },
        {
            question : 'How many times did Ross Geller get divorced on Friends?',
            answers :[
                {text : '5 times', correct: false},
                {text : '3 times', correct: true},
                {text : '2 times', correct: false} ,
                {text : 'Never got divorced', correct: false},
            ]
        },
        {
            question : 'what is the name of Michelle Obamas 2018 Memoir called?',
            answers :[
                {text : 'become', correct: false},
                {text : 'became', correct: false},
                {text : 'becoming', correct: true},
                {text : 'Michelle', correct: false},
            
            ] },
    
            {
                question : 'How many Harry Potter books are there?',
                answers :[
                    {text : '4 books', correct: false},
                    {text : '7 books', correct: true},
                    {text : '5 books', correct: false}, 
                    {text : '2 books', correct: false},
                ]
        
            }
    ]
    )

console.log(questions) 
    return (
        <div>
            {/* map over questions and show answers */}
            {/* find out if questions are right or wrong */}
            {/* number to show up somewhere to show scoreboard */}
            {/* resart button that goes back to 0  all answers to go back to original colour*/}
        </div>
    )
}

export default Quiz
