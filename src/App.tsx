import Label from './Label';
import TodoItem from './TodoItem';
import { useState } from 'react';

interface Test {
  id: number;
  text: string;
  state: boolean;
}

function App() {
  const [TodoList, setTodoList] = useState([]);
  const [item, setItem] = useState({
    id: 0,
    text: '',
    state: false,
  });

  return (
    <section>
      <h1>Todo List</h1>
      <Label
        item={item}
        setItem={setItem}
        TodoList={TodoList}
        setTodoList={setTodoList}
      />
      {TodoList.map((value: Test, index: number) => (
        <TodoItem key={index} value={value} />
      ))}
    </section>
  );
}

export default App;
