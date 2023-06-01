import styles from  "./style.module.css";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Todolist = (props) => {
    const { todoList, deleteTodo } = props;

    return (
        <ul>
            <li>
                <div className={styles.far}>
                    <FontAwesomeIcon
                    icon={faTrashAlt}
                    size="lg"
                    onClick={() => deleteTodo(todo.id, todo.title)}
                    />
                </div>
            </li>
        </ul>
    );
}
