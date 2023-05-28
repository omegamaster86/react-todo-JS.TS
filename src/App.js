import './App.css';
import { AddTodo } from "../src/component/addTodo/index.jsx";
import SearchKeyword from "../src/component/searchkeyword"

const App = () => {
  return (
    <div className='App'> 
      <h1>Todo List</h1>
      <h2>ADD TODO</h2>
      <AddTodo />
      <SearchKeyword />
    </div>
  );
};

export default App;
