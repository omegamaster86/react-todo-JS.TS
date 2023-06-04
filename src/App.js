import './App.css';
import { TodoTemplate } from './component/TodoTemplate/index';
import { TodoProvider } from "../src/context/TodoContext";

const App = () => {
  return (
    <TodoProvider> 
      <TodoTemplate />
    </TodoProvider>
  );
};

export default App;
