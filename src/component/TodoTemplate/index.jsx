import { useState, useMemo } from "react";
import { InputForm } from "../InputForm/index";
import { AddTodo } from "../addTodo/index";
import { TodoList } from "../Todolist/index"
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../../data";
import styles from "./style.module.css";



export const TodoTemplate = () => {
  /* todo list */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /* add input title */
  const [addInputValue, setAddInputValue] = useState("");
  /* todo 採番ID */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  /* 検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");

//   const showTodoList = () => {
//     return (
//         originTodoList.filter(todo =>
//         todo.title.includes(searchKeyword))
//           )};

  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      // 検索キーワードに部分一致したTodoだけを一覧表示する
      const regexp = new RegExp("^" + searchKeyword, "i");
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

//  addInputValueの変更処理

  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  const addTodo = (e) => {
    if (e.key === "Enter" && addInputValue !== "") {
        const nextUniqueId = uniqueId + 1;
        const newTodoList = [
            ...originTodoList,
            {
              id: nextUniqueId,
              title: addInputValue,
            },
        ];
        setOriginTodoList(newTodoList);
    
        // 採番IDを更新
        setUniqueId(nextUniqueId);
        // todo追加後、入力値をリセット
        setAddInputValue("");
      };
  };

   /**
   * Todo削除処理
   * @param { number } targetId
   * @param { string }targetTitle
   */
  const deleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
      // 削除するid以外のtodoリストを再編集
      const newTodoList = originTodoList.filter((todo) => todo.id !== targetId);
      // todoを削除したtodo listで更新
      setOriginTodoList(newTodoList);
    }
  };
  // 検索キーワード更新処理
  const changeSearchKeyword = (e) => setSearchKeyword(e.target.value);

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