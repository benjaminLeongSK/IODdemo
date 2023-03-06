import './App.css';
import AddTodo from './component/AddTodo';
import Title from './component/Title';
import TodoList from './component/TodoList';

function App() {
  return (
    <>
      <Title />
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
