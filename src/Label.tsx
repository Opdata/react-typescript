import { useState } from 'react';

const Label = ({ item, setItem, TodoList, setTodoList }: any) => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const onChange = (e: any): void => {
    const { value } = e.currentTarget;
    setText(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setItem({ id: number, text: text, state: false });
    setNumber(() => number + 1);
    setTodoList(TodoList.concat(item));
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} value={text}></input>
      <button type={'submit'}>추가</button>
    </form>
  );
};

export default Label;
