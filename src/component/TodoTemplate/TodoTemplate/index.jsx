 import { BaseLayout } from "../../organisms/BaseLayout";
 import { InputForm } from "../../atoms/InputForm/index";
 import { TodoList } from "../../organisms/TodoList";
 import { useTodoContext } from "../../../context/TodoContext";
 import { useTodoTemplate } from "./useTodoTemplate";
 import styles from "./styles.module.css";
 
 export const TodoTemplate = () => {
   // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
   const { originTodoList, deleteTodo } = useTodoContext();
 
   const [{ searchKeyword, showTodoList }, { handleChangeSearchKeyword }] =
     useTodoTemplate({ originTodoList });
 
   return (
     <BaseLayout title={"TodoList"}>
       <div className={styles.container}>
         {/* Todo検索フォームエリア */}
         <div className={styles.area}>
           <InputForm
             value={searchKeyword}
             placeholder={"Search Keyword"}
             onChange={handleChangeSearchKeyword}
           />
         </div>
         {/* Todoリスト一覧表示 */}
         <div className={styles.area}>
           {showTodoList.length > 0 && (
             <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
           )}
         </div>
       </div>
     </BaseLayout>
   );
 };