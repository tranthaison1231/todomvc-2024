import { useState } from "react";
import { Input } from "./Input";
import { Todo } from "./Todo";
import { TodoFooter } from "./TodoFooter";

interface Todo {
  id: number;
  content: string;
  checked: boolean;
}

export function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTodos((prev) => [
        ...prev,
        {
          id: Math.random(),
          content: text,
          checked: false,
        },
      ]);
      setText("");
    }
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      });
    });
  };

  const toggleAll = () => {
    setTodos((prev) => {
      const allChecked = prev.every((todo) => todo.checked);
      return prev.map((todo) => ({
        ...todo,
        checked: !allChecked,
      }));
    });
  };

  const handleCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.checked));
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-[#b83f45] dark:text-cyan-500 text-[80px] text-center my-[40px] font-extralight hover:text-cyan-500">
        todos
      </h1>
      <div className="flex relative">
        <div className="absolute top-[20px] left-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            onClick={toggleAll}
            stroke-linejoin="round"
            className="lucide lucide-chevron-down text-white cursor-pointer"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </div>
      <ul className="bg-white dark:bg-slate-600 shadow-2xl border-t border-[#e6e6e6] text-2xl text-[#484848] dark:text-[#e6e6e6] font-extralight">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            content={todo.content}
            checked={todo.checked}
            onToggle={() => handleToggle(todo.id)}
            onDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
      {todos.length > 0 && (
        <TodoFooter
          numberItemLeft={todos.filter((todo) => !todo.checked).length}
          onCompleted={handleCompleted}
        />
      )}
    </div>
  );
}
