import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
function App() {
  const actors = ["Sakib", "raj", "Jasim", "rubel", "shah"];
  return (
    <>
      <h1>Vite + React</h1>
      <Student></Student>
      <Actor name={"Salman"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore concepts" isDone={true}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
    </>
  );
}

function Student(props) {
  console.log(props);
  return <h2>i am a Student</h2>;
}

export default App;
