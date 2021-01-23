import Label from './Label';
import TodoItem from './TodoItem';
import { Item, TodoList } from './Types';
import { ReactElement, useState } from 'react';

function App(): ReactElement {
  const [TodoList, setTodoList] = useState<TodoList>([]);
  const [item, setItem] = useState<Item>({});

  return (
    <section>
      <h1>Todo List</h1>
      <Label
        item={item}
        setItem={setItem}
        TodoList={TodoList}
        setTodoList={setTodoList}
      />
      {TodoList.map((value: Item, index: number) => (
        <TodoItem key={index} value={value} />
      ))}
    </section>
  );
}

export default App;
