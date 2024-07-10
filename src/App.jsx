import { useState } from 'react';
import './App.css';
import QuestionPage from './components/questionPage.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [displayQuestion, setDisplayQuestion] = useState(false);

  return (
    <main>
      <div className="intro-page">
        <h1>Quizzical</h1>
        <button className="intro-btn">Start Quiz</button>
      </div>
      <QuestionPage />
    </main>
  );
}

export default App;
