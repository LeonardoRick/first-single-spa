import { useEffect, useState } from "react";
import { listenEvent, SHARED_SSPA_EVENTS } from "@leonardorick/utils";

function App({ name }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // this listener listen to all customEvents that sends an event to this event
    // name, even on another projects inside this single-spa. You can find an example
    // of this event being emmited on react-microfrontend/createTask
    listenEvent(SHARED_SSPA_EVENTS.ADD_TASK, ($event) => {
      setTasks((previsous) => [...previsous, $event.detail]);
    });
  }, []);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  return (
    <>
      <h3>name {name}</h3>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
