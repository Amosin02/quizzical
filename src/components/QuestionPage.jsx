import BackdropDesign from './BackdropDesign';

export default function QuestionPage(props) {
  const quiz = props.quizObject;

  return (
    <main className="question_page">
      <BackdropDesign />

      <a href={`/answers`}>
        <button>Check answers</button>
      </a>
    </main>
  );
}
