import { useState, useEffect } from 'react';
import './App.css';
import AnswerPage from './components/AnswerPage';
import QuestionPage from './components/QuestionPage';
import he from 'he';
import BackdropDesign from './components/BackdropDesign';
import axios from 'axios';
import { nanoid } from 'nanoid';

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
  const toComponents = questionData.map((item) => (
    <QuestionPage
      key={nanoid()}
      question={he.decode(item.question)}
      correctAns={he.decode(item.correct_answer)}
      choices={item.incorrect_answers}
    />
  ));

  return (
    <main className="intro-page">
      <BackdropDesign />
      <h1>Quizzical</h1>
      <a href={`/question`}>
        <button className="intro-btn">Start quiz</button>
      </a>
      {toComponents}
    </main>
  );
}

export default App;
