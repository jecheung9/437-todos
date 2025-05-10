import TodoItem from "./TodoItem";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";
import { nanoid } from "nanoid";



function App(props) {
  const [taskList, setTaskList] = useState(props.tasks);

  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name: name, completed: false };
    let arrayCopy = [...taskList, newTask];
    setTaskList(arrayCopy);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = taskList.filter((task) => id !== task.id);
    setTaskList(remainingTasks);
  }
  
  return (
    <main className="m-4">
      <AddTaskForm onNewTask={addTask} />
      <section>
              <h1 className="text-xl font-bold">To do</h1>
              <ul>
              {taskList?.map((task) => (
                <TodoItem
                  id={task.id}
                  name={task.name}
                  completed={task.completed}
                  key={task.id}
                  toggleTaskCompleted={toggleTaskCompleted}
                  deleteTask={deleteTask}
                />
              ))}
        </ul>
          </section>
      </main>
  );
}

export default App;