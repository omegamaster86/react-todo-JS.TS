import { InputForm } from "../atoms/InputForm/index";
import { AddTodo } from "../addTodo/index";
import { TodoList } from "../Todolist/index"
import styles from "./style.module.css";
import { useTodoContext } from "../../context/TodoContext"


export const TodoTemplate = () => {
  const {
    showTodoList,
    searchKeyword,
    addInputValue, 
    onChangeAddInputValue,
    addTodo,
    deleteTodo,
    changeSearchKeyword,
} = useTodoContext();

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Todo List</h1>
        <section className={styles.common}>
            <AddTodo
              addTodo={addTodo}
              addInputValue={addInputValue}
              onChangeTodo={onChangeAddInputValue}
            />
        </section>
        <section className={styles.common}>
            <InputForm
              placeholder={"Search Keyword"}
              searchKeyword={searchKeyword}
              changeValue={changeSearchKeyword}
            />
        </section>
        <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            deleteTodo={deleteTodo}
          />
        )}
        </section>
    </div>
  );
}