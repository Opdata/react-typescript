import { useState, ReactElement, ChangeEvent } from 'react';
import { Item, TodoList } from './Types';

const TodoItem = ({
  index,
  value,
  array,
  setTodoList,
}: {
  index: number;
  value: Item;
  array: Item[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoList>>;
}): ReactElement => {
  const [check, setCheck] = useState<boolean>(false);

  const checkHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCheck(target.checked);
  };

  const onRemove = () => {
    const newArray: Item[] = [];
    const copy = newArray.concat(array);
    copy.splice(index, 1);
    setTodoList(copy);
  };

  return (
    <li
      style={{
        listStyle: 'none',
        textDecoration: check ? 'line-through' : 'none',
      }}
    >
      <input type="checkbox" checked={check} onChange={checkHandler}></input>
      <b>{value.text}</b>
      <button style={{ marginLeft: '10px' }} onClick={onRemove}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
