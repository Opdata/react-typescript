const TodoItem = ({ value }: any) => {
  return (
    <li>
      <b>{value.text}</b>
    </li>
  );
};

export default TodoItem;
