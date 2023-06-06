 import { useContext, createContext } from "react";
 import { useHooks } from "../hooks/useHooks";

 const TodoContext = createContext({});
 
 export const TodoProvider = ({ children }) => {
   // カスタムフックから状態とロジックを呼び出してコンテキストプロバイダーにあてがう
   const { originTodoList, addTodo, updateTodo, deleteTodo } = useHooks();
 
    /**
     * TodoProvider
     * @param children
     * @constructor
     */

   return (
     <TodoContext.Provider
       value={{
         originTodoList,
         addTodo,
         updateTodo,
         deleteTodo,
       }}
     >
       {children}
     </TodoContext.Provider>
   );
 };

 export const useTodoContext = () => useContext(TodoContext);