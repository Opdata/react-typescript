import { useState, ReactElement, ChangeEvent } from 'react';
import { Item } from './Types';

const TodoItem = ({ value }: { value: Item }): ReactElement => {
  const [check, setCheck] = useState<boolean>(false);

  const checkHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // console.log(target.checked);
    // setItem(!value);
    setCheck(target.checked);
  };

  const onRemove = () => {
    //
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
