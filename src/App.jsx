import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";
function App() {
  const handleclick = (num) => {
    alert(num + 5);
  };
  const actors = ["Sakib", "raj", "Jasim", "rubel", "shah"];
  const singers = [
    { name: "mahfuz", age: 12 },
    { name: "pritom", age: 15 },
    { name: "eva", age: 14 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      <Student></Student>
      <Actor name={"Salman"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore concepts" isDone={true}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo>
      <button onClick={() => handleclick(4)}>click me</button>
    </>
  );
}

function Student(props) {
  console.log(props);
  return <h2>i am a Student</h2>;
}

export default App;
