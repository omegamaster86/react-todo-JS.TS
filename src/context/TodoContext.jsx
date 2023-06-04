import { useContext, createContext } from "react";
import { useHooks} from "../hooks/useHooks";

const TodoContext = createContext({});

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({children}) => {
    const {
        showTodoList,
        searchKeyword,
        addInputValue, 
        onChangeAddInputValue,
        addTodo,
        deleteTodo,
        changeSearchKeyword,
    } = useHooks();

    return (
        <TodoContext.Provider
        value={{
            showTodoList,
            searchKeyword,
            addInputValue, 
            onChangeAddInputValue,
            addTodo,
            deleteTodo,
            changeSearchKeyword,
        }}
        >
          {children}
        </TodoContext.Provider>
    )
}
