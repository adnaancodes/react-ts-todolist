import { useState } from "react";
import "./App.css";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos((todos) => [
      ...todos,
      {
        text: task.trim(),
        id: Math.random().toString(36).slice(2),
        completed: false,
      },
    ]);
    setTask("");
  };
  // const toggleTodo = (id: string) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) todo.completed = !todo.completed;

  //       return todo;
  //     })
  //   );
  // };

  return (
    <>
      <h1>TODO LIST</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTodo}>Add toDo</button>
      <div>
        {todos.map((todo) => (
          <div
            id={todo.id}
            key={todo.id}
            className={`todo ${todo.completed && "completed"}`}
          >
            {/* <input
              onChange={() => toggleTodo(todo.id)}
              type="checkbox"
              checked={todo.completed}
            /> */}
            <span>{todo.text}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
