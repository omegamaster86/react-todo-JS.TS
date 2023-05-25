import './App.css';
import Example from "../src/component/addTodo/index.jsx";
import SearchKeyword from "../src/component/searchkeyword"

const App = () => {
  return (
    <div className='App'> 
      <h1>Todo List</h1>
      <h2>ADD TODO</h2>
      <Example />
      <SearchKeyword />
    </div>
  );
};

export default App;
