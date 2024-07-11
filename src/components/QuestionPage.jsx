export default function QuestionPage(props) {
  return (
    <>
      <h4>Question1</h4>
      <input type="radio" name="q1" id="q1choice1" />
      <input type="radio" name="q1" id="q1choice1" />
      <input type="radio" name="q1" id="q1choice1" />
      <input type="radio" name="q1" id="q1choice1" />
      <hr />
      <h4>Question2</h4>
      <input type="radio" name="q2" id="q2choice1" />
      <input type="radio" name="q2" id="q2choice1" />
      <input type="radio" name="q2" id="q2choice1" />
      <input type="radio" name="q2" id="q2choice1" />
      <hr />
      <a href={`/answers`}>
        <button>Check answers</button>
      </a>
    </>
  );
}
