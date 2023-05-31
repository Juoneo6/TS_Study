import { useRecoilValue } from "recoil";
import { todoListState } from "../recoil/TodoListState";
import TodoItemCreator from "./TodoItemCreateor";
import TodoItem from "./TodoItem";

  const TodoList = () => {

  const todoList = useRecoilValue(todoListState)
  return (
    <div>
      <TodoItemCreator />
        {
          todoList.map((todoItem, index) => (
            <TodoItem key={index} item={todoItem}/>
          ))
        }
    </div>
  )
}

export default TodoList;