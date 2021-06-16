import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {fetchQuizQuestions} from './API'
import {Difficulty} from './API'

const TOTAL = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions,setQuestions] = useState([]);
  const [number, setNumber] = useState(1);
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log('data',fetchQuizQuestions(TOTAL,Difficulty.EASY));


  const startQuiz = async() => {
    
  }

  const checkAns = (e: React.MouseEvent<HTMLButtonElement>) =>{

  }

  const nextQuestion = () =>{

  }
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startQuiz}>START</button>
      <p className="score">Score: </p>
      <p>Loading Question ......</p>
      {/* <QuestionCard 
      questionNr = {number}
      totalQuestions={TOTAL}
      question = {questions[number].question}
      answer = {questions[number].answers}
      userAnswer = {answer? answer[number] : undefined} 
      callback = {checkAns}/> */}
      

      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
function async() {
  throw new Error('Function not implemented.');
}

