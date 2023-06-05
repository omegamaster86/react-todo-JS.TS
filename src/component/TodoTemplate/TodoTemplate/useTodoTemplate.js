 import { useMemo, useState, useCallback } from "react";

 export const useTodoTemplate = ({ originTodoList }) => {
   /* 検索キーワード */
   const [searchKeyword, setSearchKeyword] = useState("");
   /* 表示用TodoList */
   const showTodoList = useMemo(() => {
     const regexp = new RegExp("^" + searchKeyword, "i");
     return originTodoList.filter((todo) => {
       // 検索キーワードに部分一致したTodoだけを一覧表示する
       return todo.title.match(regexp);
     });
   }, [originTodoList, searchKeyword]);
 
   /**
    * 検索キーワード更新処理
    * @param {*} e
    */
   const handleChangeSearchKeyword = useCallback(
     (e) => setSearchKeyword(e.target.value),
     []
   );
 
   const states = {
     searchKeyword,
     showTodoList,
   };
   const actions = {
     handleChangeSearchKeyword,
   };
 
   return [states, actions];
 };