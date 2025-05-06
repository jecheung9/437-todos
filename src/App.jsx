import TodoItem from "./TodoItem";
import AddTaskForm from "./AddTaskForm";


function App(props) {
  const taskList = props.tasks?.map((task) =>
    <TodoItem
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id} />);
  return (
    <main className="m-4">
      <AddTaskForm />
          <section>
              <h1 className="text-xl font-bold">To do</h1>
              <ul>
                {taskList}
              </ul>
          </section>
      </main>
  );
}

export default App;