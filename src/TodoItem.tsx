import { ReactElement } from 'react';
import { Item, TodoList } from './Types';

const TodoItem = ({
  value,
  setTodoList,
}: {
  value: Item;
  setTodoList: React.Dispatch<React.SetStateAction<TodoList>>; // 체크박스에 사용
}): ReactElement => {
  const onRemove = () => {
    //
  };

  return (
    <li>
      {/* 체크밧스 추가 예정 */}
      <b
        style={
          value.state
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {value.text}
      </b>
      <button style={{ marginLeft: '10px' }} onClick={onRemove}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
