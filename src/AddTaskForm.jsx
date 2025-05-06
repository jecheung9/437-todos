function AddTaskForm() {
    return (
        <div>
            <input className="border rounded-lg p-2" placeholder="New task name" />
            <button className="border bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white 
            rounded-md p-1 ml-2">Add task</button>
        </div>
    );
}

export default AddTaskForm;