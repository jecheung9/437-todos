import { useState } from "react";

interface IAddTaskFormProps {
    onNewTask: (name: string) => void;
}

function AddTaskForm({ onNewTask }: IAddTaskFormProps) {
    const [name, setName] = useState("");

    function handleButtonClicked(e: React.MouseEvent<HTMLButtonElement>) {
        onNewTask(name);
        setName("");
    }

    return (
        <div>
            <input className="border rounded-lg p-2" placeholder="New task name"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <button className="border bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white 
            rounded-md p-1 ml-2"
            onClick={handleButtonClicked}>Add task</button>
        </div>
    );
}

export default AddTaskForm;