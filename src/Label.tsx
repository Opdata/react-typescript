import { ReactElement, useState } from 'react';
import { Item, TodoList } from './Types';

const Label = ({
  item,
  setItem,
  TodoList,
  setTodoList,
}: {
  item: Item;
  setItem: React.Dispatch<React.SetStateAction<Item>>;
  TodoList: TodoList;
  setTodoList: React.Dispatch<React.SetStateAction<TodoList>>;
}): ReactElement => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setText(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    if (text !== '') {
      setItem({ id: number, text: text });
      setNumber(number + 1);
      setTodoList(TodoList.concat(item));
    }
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={text}></input>
      <button type={'submit'}>추가</button>
    </form>
  );
};

export default Label;
