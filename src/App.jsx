import { useState, useEffect } from 'react';
import './App.css';
import AnswerPage from './components/AnswerPage';
import QuestionPage from './components/QuestionPage';
import he from 'he';
import BackdropDesign from './components/BackdropDesign';
import axios from 'axios';

function App() {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://opentdb.com/api.php?amount=5');
      setQuestionData(response.data.results);
    }
    fetchData();
  }, []);

  const question = questionData.map((item) => he.decode(item.question));
  const quizElements = questionData.map((item) => (
    <QuestionPage
      questionArr={question}
      wrong_choices={item.incorrect_answers}
      right_choice={item.correct_answer}
    />
  ));

  // fixing props

  return (
    <main className="intro-page">
      <BackdropDesign />
      <h1>Quizzical</h1>
      <a href={`/question`}>
        <button className="intro-btn">Start quiz</button>
      </a>
      {false && <QuestionPage />}
      {false && <AnswerPage />}
      {false && quizElements}
    </main>
  );
}

export default App;
