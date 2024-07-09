import "./App.css";
import Todo from "./todo";
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Student></Student>
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore concepts" isDone={true}></Todo>
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
