import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props) {
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