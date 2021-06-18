import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {fetchQuizQuestions} from './API'
import {QuestionState, Difficulty} from './API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

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
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQuestions(TOTAL,Difficulty.EASY);

    setQuestions(newQuestion);
    setScore(0);
    setAnswer([]);
    setNumber(1);
    setLoading(false);
  }
  console.log('questions',questions);
  console.log(typeof(questions[number].question))
  // console.log('vals',vals.question);
  const checkAns = (e: React.MouseEvent<HTMLButtonElement>) =>{

  }

  const nextQuestion = () =>{

  }
  return (
    <div className="App">
      <h1>React Quiz</h1>
      {gameOver || answer.length === TOTAL?(<button className="start" onClick={startQuiz}>START</button>):null}
      
      {!gameOver? <p className="score">Score: </p>:null}

      {loading? <p>Loading Question ......</p>:null}

      {/* {!gameOver && !loading && (<QuestionCard 
      questionNr = {number}
      totalQuestions={TOTAL}
      question = {vals.question}
      answer = {vals.answers}
      userAnswer = {answer? answer[number] : undefined} 
      callback = {checkAns}/>)} */}
      

      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
function async() {
  throw new Error('Function not implemented.');
}

