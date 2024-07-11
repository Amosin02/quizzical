import { useState, useEffect } from 'react';
import './App.css';
import AnswerPage from './components/AnswerPage';

function App() {
  const handleClick = () => {
    console.log('check');
  };

  return (
    <main>
      <main className="intro-page">
        <h1>Quizzical</h1>
        <a href={`/question`}>
          <button className="intro-btn">Start quiz</button>
        </a>
      </main>
    </main>
  );
}

export default App;
