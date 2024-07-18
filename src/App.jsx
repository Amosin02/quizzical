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
  const quizObject = {
    question: [],
    choices: [],
    correct_answer: [],
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://opentdb.com/api.php?amount=5');
      setQuestionData(response.data.results);
    }
    fetchData();
  }, []);

  quizObject.question = questionData.map((quiz) => he.decode(quiz.question));
  quizObject.correct_answer = questionData.map((quiz) =>
    he.decode(quiz.correct_answer)
  );

  const undecoded = questionData.map((quiz) => quiz.incorrect_answers);
  const decoded = undecoded.map((item) => item.map((item) => he.decode(item)));
  function choices(correctAns, incorrectAns) {
    const hold = [];
    correctAns.map((value, index) => {
      const holder = [];
      holder.push(value);
      incorrectAns[index].map((item) => holder.push(item));
      hold.push(holder);
    });
    return hold;
  }

  quizObject.choices = choices(quizObject.correct_answer, decoded);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route
          path="question"
          element={<QuestionPage quizObject={quizObject} />}
        />
        <Route path="answers" element={<AnswerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
