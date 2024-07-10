export default function QuestionPage(props) {
  return (
    <main className="question-page">
      <h2>question1</h2>
      <form name="q1">
        <input type="radio" name="q1" id="q1choice1" />
        <label htmlFor="q1choice1">option1</label>
        <input type="radio" name="q1" id="q1choice2" />
        <label htmlFor="q1choice2">option2</label>
        <input type="radio" name="q1" id="q1choice3" />
        <label htmlFor="q1choice3">option3</label>
        <input type="radio" name="q1" id="q1choice4" />
        <label htmlFor="q1choice4">option4</label>
      </form>
      <h2>question2</h2>
      <h2>question3</h2>
    </main>
  );
}
