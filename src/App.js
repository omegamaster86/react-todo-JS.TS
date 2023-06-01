import './App.css';
import { TodoTemplate } from './component/TodoTemplate/index';


const App = () => {
  return (
    <div className='App'> 
      <h1>Todo List</h1>
      <TodoTemplate />
    </div>
  );
};

export default App;
