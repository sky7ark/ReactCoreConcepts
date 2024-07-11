export default function Todo({ task, isDone }) {
  //   return (
  //      <li>Task: {task}</li>
  //   )
  // conditional rendering
  //   if (isDone === true) {
  //     return <li>Finished: {task}</li>;
  //   } else {
  //     return <li>Work on: {task}</li>;
  //   }
  //   if (isDone) {
  //     return <li>Finish: {task}</li>;
  //   }
  //   return <li>working on: {task}</li>;
  isDone === true ? <li>Finish: {task}</li> : <li>on going: {task}</li>;
}
