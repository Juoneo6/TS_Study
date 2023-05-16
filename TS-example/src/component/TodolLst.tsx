import React, { useState } from "react";

interface Todo {
  text: string;
  complete: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    if (!inputValue) return;
    const newTodo: Todo = { text: inputValue, complete: false };
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (index: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((_, i) => i !== index);
    });
  };

  const handleToggleComplete = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo, index) => (
        <div key={index}>
          <span
            style={{ textDecoration: todo.complete ? "line-through" : "" }}
            onClick={() => handleToggleComplete(index)}
          >
            {todo.text}
          </span>
          <button onClick={() => handleDeleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
