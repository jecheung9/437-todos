import TodoItem from "./TodoItem";
import AddTaskForm from "./AddTaskForm";
import { use, useState } from "react";
import { nanoid } from "nanoid";
import Modal from "./Modal";
import React from "react";

interface ITask {
  id: string;
  name: string;
  completed: boolean;
}

interface IAppProps {
  tasks: ITask[];
}

function App(props: IAppProps) {
  const [taskList, setTaskList] = React.useState<ITask[]>(props.tasks);
  const [isOpen, setIsOpen] = useState(false);

  function addTask(name: string) {
    const newTask = { id: `todo-${nanoid()}`, name: name, completed: false };
    let arrayCopy = [...taskList, newTask];
    setTaskList(arrayCopy);
    setIsOpen(false);
  }

  function toggleTaskCompleted(id: string) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTaskList(updatedTasks);
  }

  function deleteTask(id: string) {
    const remainingTasks = taskList.filter((task) => id !== task.id);
    setTaskList(remainingTasks);
  }
  
  return (
    <main className="m-4">

      {isOpen && <Modal headerLabel="New Task"
        onCloseRequested={() => setIsOpen(false)}>
        <AddTaskForm onNewTask={addTask} />
        </Modal>}

      <section>
      <button className="border bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white 
            rounded-md p-1" onClick={() => setIsOpen(true)}>Add Task </button>
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