import { ReactElement, useState } from 'react';
import { Item, TodoList } from './Types';

const Label = ({
  TodoList,
  setTodoList,
}: {
  TodoList: TodoList;
  setTodoList: React.Dispatch<React.SetStateAction<TodoList>>;
}): ReactElement => {
  const [itemnumber, setitemNumber] = useState<number>(0);
  const [text, setText] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    setText(value);
  };

  const onSubmit = (e: React.FormEvent, number: number, str: string) => {
    const Todo: Item = {
      id: number,
      text: str,
    };
    setTodoList(TodoList.concat(Todo));
    setitemNumber(itemnumber + 1);
    setText('');

    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        onSubmit(e, itemnumber, text);
      }}
    >
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
        }}
        value={text}
      ></input>
      <button type={'submit'}>추가</button>
    </form>
  );
};

export default Label;
