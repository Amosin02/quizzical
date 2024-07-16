import { useState } from 'react';
import BackdropDesign from './BackdropDesign';

export default function QuestionPage(props) {
  return (
    <main className="question_page">
      <BackdropDesign />
      <h4>{props.question}</h4>
      <a href={`/answers`}>
        <button>Check answers</button>
      </a>
    </main>
  );
}
