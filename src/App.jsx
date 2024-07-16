import { useState, useEffect } from 'react';
import './App.css';
import AnswerPage from './components/AnswerPage';
import QuestionPage from './components/QuestionPage';
import he from 'he';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './components/Intro';

function App() {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://opentdb.com/api.php?amount=5');
      setQuestionData(response.data.results);
    }
    fetchData();
  }, []);

  // fixing props
  const questions = questionData.map((quiz) => he.decode(quiz.question));
  const choices = questionData.map((quiz) => quiz.incorrect_answers);
  const correctAnswer = questionData.map((quiz) => quiz.correct_answer);

  console.log(questionData);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route
          path="question"
          element={
            <QuestionPage
              question={questions}
              choices={choices}
              correctAnswer={correctAnswer}
            />
          }
        />
        <Route path="answers" element={<AnswerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
