import { useState, useEffect } from 'react';
import './App.css';
import AnswerPage from './components/AnswerPage';
import QuestionPage from './components/QuestionPage';
import he from 'he';
import BackdropDesign from './components/BackdropDesign';

function App() {
  const [questionData, setQuestionData] = useState(null);
  // const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => setQuestionData(data.results));
  }, []);

  // function putDataInAnswerPage() {
  //   questionData.results.map((item) => {
  //     setQuestions(item.question);
  //   });
  // }

  if (questionData) {
    const questions = questionData.map((item) => he.decode(item.question));
    console.log(questions);
  }

  return (
    <main className="intro-page">
      <BackdropDesign />
      <h1>Quizzical</h1>
      <a href={`/question`}>
        <button className="intro-btn">Start quiz</button>
      </a>
      {false && <QuestionPage />}
      {false && <AnswerPage />}
    </main>
  );
}

export default App;
