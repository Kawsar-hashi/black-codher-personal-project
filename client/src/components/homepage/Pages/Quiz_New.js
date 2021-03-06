import React, { useState } from 'react';
import './Quiz.css';





function Quiz(props) {
	const questions = [
		{
			questionText: 'What is the name of Beyonce`s fangroup?',
			answerOptions: [
				{ answerText: 'Bey-hive', isCorrect: false },
				{ answerText: 'The Bees', isCorrect: false },
				{ answerText: 'Beehive', isCorrect: true },
				{ answerText: 'The Wasps', isCorrect: false },
			],
		},
		{
			questionText: 'How many times did Ross Geller get divorced on Friends?',
			answerOptions: [
				{ answerText: '5 times', isCorrect: false },
				{ answerText: '3 times', isCorrect: true },
				{ answerText: '2 times', isCorrect: false },
				{ answerText: 'Never got divorced', isCorrect: false },
			],
		},
		{
			questionText: 'What is the name of Michelle Obama`s bestselling book',
			answerOptions: [
				{ answerText: 'Becoming', isCorrect: true },
				{ answerText: 'Became', isCorrect: false },
				{ answerText: 'Become', isCorrect: false },
				{ answerText: 'Michelle', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
            //send a get request via fetch to update the times played and score 
            //when we recieve user back we need to pull setUser again.{}
            fetch('http://localhost:3001/user/api/props.user.id', {
      
      }).then(res => res.json()).then(res => {
          props.setUser(res.user)
          
  
      }
    )
			setShowScore(true);
		}
	};
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}



export default Quiz;