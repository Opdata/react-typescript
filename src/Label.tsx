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
  const [text, setText] = useState<string>('');
  const [itemnumber, setitemNumber] = useState<number>(0);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setText(value);
  };

  const onSubmit = (e: React.FormEvent) => {
    setItem(() => ({
      id: itemnumber,
      text: text,
    }));
    setitemNumber((prev: number) => prev + 1);
    setTodoList(TodoList.concat(item));
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
