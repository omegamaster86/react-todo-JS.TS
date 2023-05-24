import './App.css';
import Example from "../src/component/addTodo/index.jsx";

const App = () => {
  return (
    <div className='App'> 
      <h1>Todo List</h1>
      <h2>ADD TODO</h2>
      <Example />
    </div>
  );
};

export default App;
