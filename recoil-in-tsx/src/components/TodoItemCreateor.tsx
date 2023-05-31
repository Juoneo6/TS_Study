import { ChangeEventHandler, useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/TodoListState";

  let id = 0;

  const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const addItem = useCallback(() => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
    {
      id: getId(),
      text: inputValue,
      isComplete: false,
    }
  ]);
    setInputValue('');
},[inputValue, setTodoList])

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(({ target: {value}}) => {
    setInputValue(value);
  },[]);

  const getId = () => id++;

  return (
    <div>
      <input type='text' value={inputValue} onChange={onChange}/>
      <button onClick={addItem}>추가하기</button>
    </div>
  )
}

export default TodoItemCreator;