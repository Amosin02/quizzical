import BackdropDesign from './BackdropDesign';

export default function QuestionPage(props) {
  const query = props.question.map((quiz) => <h4 key={quiz}>{quiz}</h4>);

  const incompleteOptions = props.choices.map((choice) => choice);
  const answers = props.correctAnswer.map((answer) => answer);
  const options = [];
  for (let i = 0; i < answers.length; i++) {
    options.push(incompleteOptions[i].concat(answers[i]));
  }
  console.log(options);

  const showChoices = options.map((choices) => (
    <li>{choices.forEach((element) => element)}</li>
  ));

  return (
    <main className="question_page">
      <BackdropDesign />
      {query}

      {/* <ul>{showChoices}</ul> */}
      <a href={`/answers`}>
        <button>Check answers</button>
      </a>
    </main>
  );
}
