import { todoListState } from "../recoil/TodoListState";
import { TodoItemType } from "../models/TodoItem";
import { useRecoilState } from "recoil";
import { ChangeEventHandler, useCallback } from "react";

interface Props {
  item: TodoItemType;
}

  const replaceItemAtIndex = (arr: TodoItemType[], index: number, newValue: TodoItemType): TodoItemType[] => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  const removeItemAtIndex = (arr: TodoItemType[], index: number): TodoItemType[] => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

  const TodoItem = (props: Props) => {

  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === props.item);

  const editItemText: ChangeEventHandler<HTMLInputElement> = useCallback(({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {...props.item, text: value});
    setTodoList(newList);
  },[index, props.item, setTodoList, todoList]);

  const toggleItemCompletion = useCallback(() => {
    const newList = replaceItemAtIndex(todoList, index, {...props.item, isComplete: !props.item.isComplete});
    setTodoList(newList);
  }, [index, setTodoList, todoList]);

  const deleteItem = useCallback(() => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  },[index, setTodoList, todoList]);

  return (
    <div>
      <input type="text" value={props.item.text} onChange={editItemText} />
      <input type="checkbox" checked={props.item.isComplete} onChange={toggleItemCompletion}/>
      <button onClick={deleteItem}>X</button>
    </div>
  )
}

export default TodoItem;