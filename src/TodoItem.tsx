import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface ITodoItemProps {
    id: string;
    completed: boolean;
    toggleTaskCompleted: (id: string) => void;
    name: string;
    deleteTask: (id: string) => void;
}

function TodoItem(props: ITodoItemProps) {
    return (
        <li>
            <label>
                <input id={props.id} type="checkbox" defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}/> {props.name}
            </label>
            <button onClick={() => props.deleteTask(props.id)}>
                <FontAwesomeIcon icon={faTrash} className='text-gray-400 ml-4' title="Delete task" /></button>
        </li>
    )
}

export default TodoItem;