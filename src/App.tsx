import Label from './Label';
import TodoItem from './TodoItem';
import { Item, TodoList } from './Types';
import { ReactElement, useState } from 'react';

function App(): ReactElement {
  const [TodoList, setTodoList] = useState<TodoList>([]);

  return (
    <section>
      <h1>Todo List</h1>
      <Label TodoList={TodoList} setTodoList={setTodoList} />
      {TodoList.map((value: Item, index: number, array: Item[]) => (
        <TodoItem
          key={index}
          index={index}
          value={value}
          array={array}
          setTodoList={setTodoList}
        />
      ))}
      {console.log(TodoList)}
    </section>
  );
}

export default App;
