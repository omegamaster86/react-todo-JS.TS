 import { useParams } from "react-router-dom";
 import { useTodoContext } from "../../../context/TodoContext";
 import { BaseLayout } from "../../BaseLayout/index";
 import { InputForm } from "../../atoms/InputForm/index";
 import { TextArea } from "../../atoms/TextArea/index";
 import styles from "./styles.module.css";

 export const TodoDetailTemplate = () => {
   const { originTodoList } = useTodoContext();
   const { id } = useParams();
   const todo = originTodoList.find((todo) => String(todo.id) === id);
 
   return (
     <BaseLayout title={"TodoDetail"}>
       {!!todo && (
         <div className={styles.container}>
           <div className={styles.area}>
             <InputForm disabled value={todo.title} placeholder={"Title"} />
           </div>
           <div className={styles.area}>
             <TextArea disabled value={todo.content} placeholder={"Content"} />
           </div>
         </div>
       )}
     </BaseLayout>
   );
 };